import { Button } from "@nextui-org/button";
// import TextArea from "@/components/html/TextArea/TextArea";
import { Textarea } from "@nextui-org/input";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React, { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";
import {
  addCommentToPost,
  removeFirstCommentOfPost,
} from "@/redux/features/reactionsSlice";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { Post as PostInterface } from "@/types/post.types";

export interface CommentFormProps {
  post: PostInterface;
}

const CommentForm = ({ post }: CommentFormProps) => {
  // constants
  const postId = post._id;
  const postedBy = post.user;

  // states
  const [comment, setComment] = useState("");

  // redux hooks
  const dispatch = useDispatch();

  // session hooks
  const session = useSession();
  const user = session.data?.user;

  console.log(session.data);

  // package hooks
  const axiosInstance = useAxios();
  const {
    mutate: addComment,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post("/reactions/create", data);
      return res?.data;
    },
  });

  // custom hooks

  // functions
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment) return;

    dispatch(
      addCommentToPost({
        postId,
        comment: {
          post: postId,
          reactionFrom: {
            _id: user._id,
            displayName: user.displayName,
            userName: user.userName,
            email: user.email,
            photoUrl: user?.photoUrl,
          },
          reactedTo: postedBy,
          content: comment,
          type: "comment",
        },
      })
    );
    addComment({
      post: postId,
      reactionFrom: user._id,
      reactedTo: postedBy._id,
      content: comment,
      type: "comment",
    });
  };

  // effects
  useEffect(() => {
    if (isError) {
      dispatch(removeFirstCommentOfPost({ postId }));
    }

    if (isSuccess) setComment("");
  }, [isError, isSuccess]);

  return (
    <form
      onSubmit={handleAddComment}
      action=""
      className="p-4 border flex flex-col gap-y-4 border-light-gray dark:border-dark-gray shadow-sm rounded-xl "
    >
      <div className="flex gap-4  rounded-xl">
        <ProfilePic />
        <Textarea
          variant="faded"
          label="Write Something.."
          labelPlacement="inside"
          size="sm"
          className="-mt-2  border-primary focus:!border-b-gray-200"
          style={{
            border: "none",
          }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button
          disabled={!comment || isPending}
          spinner={<Spinner />}
          className="py-2 px-8  rounded-lg text-sm  bg-primary text-white"
          size="sm"
          variant="bordered"
          type="submit"
          // onClick={handleAddComment}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
