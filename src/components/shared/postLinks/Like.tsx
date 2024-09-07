import useAxios from "@/hooks/useAxios";
import useMutate from "@/hooks/useMutate";
import { updateLikes } from "@/redux/features/postSlice";
import { formatNumber } from "@/utils/formatNumber";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

export interface LikeProps {
  likesCount: number;
  isLiked: boolean;
  postId: string;
  postedBy: string;
}

const Like = ({ likesCount, isLiked, postId, postedBy }: LikeProps) => {
  // states

  // redux hooks
  const dispatch = useDispatch();

  // packages hooks
  const session = useSession();
  const user = session?.data?.user;

  const axiosInstance = useAxios({
    isPrivate: true,
  });

  const {
    mutate: addLike,
    isPending: isAddPending,
    isError: isAddError,
    isSuccess: isAddSuccess,
  } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post("/reactions/create", data);
      return res?.data;
    },
  });

  const {
    mutate: deleteLike,
    isPending: isDeletePending,
    isError: isDeleteError,
    isSuccess: isDeleteSuccess,
  } = useMutation({
    mutationFn: async () => {
      const reactionFrom = session?.data?.user?._id;
      const reactedTo = postedBy;

      const res = await axiosInstance.delete(
        `/reactions/remove/like/${postId}/${reactionFrom}/${reactedTo}`
      );
      return res?.data;
    },
  });

  // custom hooks

  // functions
  const handleLikeChange = async () => {
    if (isAddPending || isDeletePending) return;

    dispatch(
      updateLikes({
        postId,
      })
    );

    console.log(isLiked);

    if (isLiked) {
      deleteLike();
    } else {
      addLike({
        user: session?.data?.user?._id,
        type: "like",
        post: postId,
        reactionFrom: session?.data?.user?._id,
        reactedTo: postedBy,
      });
    }
  };

  // effects
  useEffect(() => {
    if (isAddError || isDeleteError) {
      dispatch(
        updateLikes({
          postId,
        })
      );
    }
  }, [isAddError, isDeleteError]);

  return (
    <div
      onClick={handleLikeChange}
      className="flex gap-2  items-center cursor-pointer"
    >
      {/* <Image
        src="/assets/like-active.svg"
        width={20}
        height={20}
        alt="Like Icon"
      /> */}
      <FaHeart
        className={`text-md  ${isLiked ? " text-primary" : "text-gray-400"}  ${
          isAddPending || isDeletePending ? "  animate-pulse" : ""
        }`}
      />

      <p>{formatNumber(likesCount)}</p>
    </div>
  );
};

export default Like;
