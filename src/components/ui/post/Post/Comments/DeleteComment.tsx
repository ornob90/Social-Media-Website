import ConfirmDeleteModel from "@/components/shared/modals/ConfirmDeleteModel";
import useAxios from "@/hooks/useAxios";
import { removeCommentById } from "@/redux/features/reactionsSlice";
import { ConfirmModalBtnEnum } from "@/types/global.types";
import { CommentInterface } from "@/types/reactions.types";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

export interface DeleteCommentProps {
  comment: CommentInterface;
  commentIndex: number;
  selected: string;
}

export function DeleteComment({
  comment,
  commentIndex,
  selected,
}: DeleteCommentProps) {
  // states
  const [isConfirming, setIsConfirming] = useState(false);

  // redux hooks
  const dispatch = useDispatch();

  // session hooks

  // package hooks
  const axiosInstance = useAxios();
  const {
    mutate: deleteComment,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: async () => {
      const result = await axiosInstance.delete(
        `/reactions/remove/comment/${comment.post}/${comment.reactionFrom._id}/${comment.reactedTo._id}`
      );

      return result.data;
    },
  });

  // custom hooks

  // functions
  const handleConfirmation = (action: ConfirmModalBtnEnum) => {
    if (action === ConfirmModalBtnEnum.CANCEL) {
      return setIsConfirming(false);
    }

    deleteComment();
  };

  // effects
  useEffect(() => {
    if (isSuccess) {
      setIsConfirming(false);
      dispatch(
        removeCommentById({
          postId: comment.post,
          commentIndex: commentIndex,
        })
      );
    }
  }, [isSuccess]);

  useEffect(() => {
    if (selected === "delete") {
      setIsConfirming(!isConfirming);
    }
  }, [selected]);

  return (
    <>
      {/* <MdOutlineDelete
        onClick={() => setIsConfirming(!isConfirming)}
        className=" cursor-pointer text-lg text-red-500"
      /> */}
      <ConfirmDeleteModel
        warningMessage="Are you sure? This comment will be deleted!"
        isModalOpen={isConfirming}
        isConfirmLoad={isPending}
        onModalChange={() => setIsConfirming(!isConfirming)}
        onConfirmation={handleConfirmation}
      />
    </>
  );
}
