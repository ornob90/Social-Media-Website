import { Post as PostInterface, SavedPost } from "@/types/post.types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Post from "@/components/ui/post/Post/Post";
import PostedBy from "../postedby/PostedBy";
import { useSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { addPostAtFirst } from "@/redux/features/postSlice";

let isTrue = false;

const Share = ({ post }: { post: PostInterface }) => {
  // constants
  const HAVE_IMAGES = post.images?.length > 0;

  // states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");

  // session hooks
  const session = useSession();
  const user = session.data?.user;

  // custom hooks
  const axiosInstance = useAxios();

  // redux hooks
  const dispatch = useDispatch();

  // package hooks
  const { isOpen } = useDisclosure();
  const {
    mutate: addSharedPost,
    data: sharedPostResponse,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: SavedPost) => {
      const result = await axiosInstance.post("/posts/create", data);
      return result?.data;
    },
  });

  // functions
  const handleSaveSharePost = () => {
    const sharedPost = {
      user: user?._id,
      sharedPostId: post?.sharedPostId?._id || post?._id,
      content,
    };

    addSharedPost(sharedPost);
  };

  // effects
  useEffect(() => {
    if (isSuccess) {
      dispatch(addPostAtFirst(sharedPostResponse?.data));
      setIsModalOpen(false);
    }
  }, [isSuccess]);

  return (
    <div>
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="flex gap-2 cursor-pointer"
      >
        <Image src="/assets/share.svg" width={20} height={20} alt="Like Icon" />
        <p>10k</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(!isModalOpen)}
        scrollBehavior={HAVE_IMAGES ? "outside" : "normal"}
        // className={`${HAVE_IMAGES ? "!w-[60%]" : ""}`}
        size={HAVE_IMAGES ? "4xl" : "lg"}
      >
        <ModalContent>
          {(onClose) => (
            <section className={`p-4 flex  flex-col gap-y-4 `}>
              <PostedBy {...user} />
              <Textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Say something about this"
                size="sm"
              />
              <section className="border p-4 rounded-xl">
                <Post
                  post={post?.sharedPostId || post}
                  hideReactions
                  removeBorder
                  removePadding
                />
              </section>
              <section className="flex justify-end gap-x-2">
                <Button
                  disabled={isPending}
                  isLoading={isPending}
                  onClick={handleSaveSharePost}
                  size="sm"
                  className=" bg-primary text-white"
                >
                  Share
                </Button>
                <Button
                  disabled={isPending}
                  onClick={() => setIsModalOpen(false)}
                  size="sm"
                  variant="bordered"
                >
                  Cancel
                </Button>
              </section>
            </section>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Share;
