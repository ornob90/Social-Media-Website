"use client";
import { Post as PostInterface } from "@/types/post.types";
import React, { useEffect, useRef } from "react";
import Post from "../Post/Post";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useParams, useRouter } from "next/navigation";
import useGetPostDetails from "@/hooks/useGetPostDetails";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { useAppSelector } from "@/hooks/redux-types";

export interface PostDetailsModalProps {
  //   post: PostInterface;
  disabledInitialOpen?: boolean;
  isModalOpen?: boolean;
  onModalChange?: () => void;
}

const PostDetailsModal = ({
  disabledInitialOpen,
  isModalOpen,
  onModalChange,
}: PostDetailsModalProps) => {
  // router hooks
  const params = useParams<{ postId: string }>();

  // custom hooks
  const { post, loading } = useGetPostDetails(params.postId);

  // redux hooks
  const postFromStore = useAppSelector((state) => state.post.curSelectedPost);

  // package hooks
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isModuleMount = useRef<boolean>();
  const router = useRouter();

  useEffect(() => {
    if (!isModuleMount.current) {
      isModuleMount.current = true;

      if (!disabledInitialOpen) {
        onOpen();
      }
    }
  }, [isModuleMount]);

  if (!loading && !post) {
    router.push("/");
    return <></>;
  }

  return (
    <Modal
      isOpen={
        (!disabledInitialOpen && isOpen) || (disabledInitialOpen && isModalOpen)
      }
      defaultOpen={true}
      onOpenChange={() => {
        !disabledInitialOpen && router.back();
        onOpenChange();
        onModalChange && onModalChange();
      }}
      size="3xl"
      className="p-4 no-scrollbar"
      scrollBehavior="outside"
      placement="top"
    >
      <ModalContent className="">
        {(onClose) => (
          <>
            <ModalBody>
              {loading && <PostSkeleton />}
              {post && !loading && <Post post={post} />}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PostDetailsModal;
