"use client";
import AnimatedContainer from "@/components/containers/AnimatedContainers";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import { CommentInterface } from "@/types/reactions.types";
import { timesAgo } from "@/utils/formateTimesAgo";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";
import { DeleteComment } from "./DeleteComment";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import { updateCommentByIndex } from "@/redux/features/reactionsSlice";
import { BsThreeDots } from "react-icons/bs";
import CommentDropdown from "./CommentDropdown";
import Content from "@/components/shared/content/Content";
// import CommentDropdown from "./CommentDropdown";

export interface CommentProps {
  comment: CommentInterface;
  commentIndex: number;
}

const Comment = ({ comment, commentIndex }: CommentProps) => {
  // states
  const [isEdit, setIsEdit] = useState(false);
  const [draftComment, setDraftComment] = useState("");
  const [selected, setSelected] = useState("");

  console.log(selected);

  // redux hooks
  const dispatch = useDispatch();
  ``;

  // session hooks

  // custom hooks
  const axiosInstance = useAxios();

  // package hooks
  const {
    mutate: updateComment,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: { content: string }) => {
      const result = await axiosInstance.put(
        `/reactions/update/comment/${comment.post}/${comment.reactionFrom._id}/${comment.reactedTo._id}`,
        data
      );

      return result?.data;
    },
  });

  // functions

  // effects
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        updateCommentByIndex({
          commentIndex,
          postId: comment.post,
          content: draftComment,
        })
      );
      setIsEdit(false);
      setSelected("");
    }
  }, [isSuccess]);

  useEffect(() => {
    setDraftComment(comment.content);
  }, [comment.content]);

  useEffect(() => {
    if (!selected) return;

    if (selected === "edit") {
      setIsEdit(!isEdit);
    }
  }, [selected]);

  return (
    <AnimatedContainer className=" flex  gap-x-3  py-2 ">
      <div className="md:col-span-1 w-max">
        <ProfilePic />
      </div>
      <ul className="flex-1 max-md:flex-1 md:col-span-11 flex flex-col justify-between ">
        <li className="flex justify-between  -mt-2">
          <div className=" flex flex-col md:flex-row items-start md:items-center gap-x-2 font-semibold">
            {comment.reactionFrom.displayName}
            <p className="text-dark-gray text-[12px] font-normal">
              {timesAgo(comment.createdAt)}
            </p>
          </div>
          {/* <div className=" flex  justify-end gap-x-3">
            {isEdit && (
              <MdOutlineEditOff
                onClick={() => setIsEdit(false)}
                className=" cursor-pointer text-lg text-primary"
              />
            )}

            {!isEdit && (
              <AiOutlineEdit
                onClick={() => setIsEdit(true)}
                className=" cursor-pointer text-lg text-primary"
              />
            )}
            </div> */}
          <DeleteComment
            comment={comment}
            commentIndex={commentIndex}
            selected={selected}
          />
          <CommentDropdown
            onChange={(value) => {
              console.log(value);
              setSelected(value);
            }}
          />
        </li>

        <AnimatedContainer
          isVisible={isEdit}
          className="flex  flex-col gap-y-2"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          layout={true}
        >
          <Textarea
            variant="bordered"
            labelPlacement="inside"
            size="sm"
            className="-mt-2  border-primary !bg-transparent focus:!border-b-gray-200 focus:!outline-none focus-within:!outline-none focus:!border-none"
            value={draftComment}
            onChange={(e) => setDraftComment(e.target.value)}
          />
          <div className="flex  justify-end gap-x-2">
            <Button
              onClick={() => {
                !isPending &&
                  updateComment({
                    content: draftComment,
                  });
              }}
              disabled={isPending || draftComment === comment.content}
              isLoading={isPending}
              size="sm"
              className="bg-gray-800 disabled:bg-gray-800/80 disabled:cursor-not-allowed hover:!bg-gray-800 text-white"
            >
              {isPending ? "Updating" : "Update"}
            </Button>
            <Button
              onClick={() => {
                setIsEdit(false);
                setSelected("");
              }}
              size="sm"
              className="bg-red-500 text-white"
            >
              Cancel
            </Button>
          </div>
        </AnimatedContainer>

        <AnimatedContainer
          layout={true}
          isVisible={!isEdit}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0 }}
        >
          <Content
            className="dark:text-white text-[12px]"
            content={draftComment}
          />
        </AnimatedContainer>
      </ul>
    </AnimatedContainer>
  );
};
export default Comment;
