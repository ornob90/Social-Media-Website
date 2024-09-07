import Header from "@/components/shared/header/Header";
import React, { useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "@/components/forms/CommentForm/CommentForm";
import { Button } from "@nextui-org/button";
import CommentSkeleton from "@/components/skeletons/CommentSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import useAxios from "@/hooks/useAxios";
import {
  addCommentsOfPost,
  ReactionInitialState,
} from "@/redux/features/reactionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { CommentInterface } from "@/types/reactions.types";
import { Spinner } from "@nextui-org/spinner";
import { Post as PostInterface } from "@/types/post.types";

const Comments = ({ post }: { post: PostInterface }) => {
  // constants
  const postId = post._id;

  // states

  // redux hooks
  const { comments } = useSelector(
    (state: { reactions: ReactionInitialState }) => state.reactions
  );
  const dispatch = useDispatch();

  // session hooks

  // packages hooks
  const axiosInstance = useAxios();
  const { data, isSuccess, fetchNextPage, isPending, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["Comments", postId],
      queryFn: async ({ pageParam = 1 }) => {
        const result = await axiosInstance.get(
          `/reactions/comments/${postId}?page=${pageParam}&limit=10`
        );
        return result?.data?.data?.comments;
      },
      initialPageParam: 1,
      getNextPageParam(lastPage, allPages) {
        return lastPage && lastPage?.length === 10
          ? allPages.length + 1
          : undefined;
      },
    });

  // custom hooks

  // functions

  // effects
  useEffect(() => {
    if (isSuccess) {
      const commentsToSave: CommentInterface[] = [];

      data.pages.forEach((group) =>
        group.forEach((comment: CommentInterface) => {
          commentsToSave.push(comment);
        })
      );

      dispatch(
        addCommentsOfPost({
          postId,
          comments: commentsToSave,
        })
      );
    }
  }, [isSuccess, data]);

  return (
    <div className="mt-10">
      <Header header={`Comments | ${15}K`} className="!text-lg" />
      <CommentForm post={post} />

      {isPending && comments[postId]?.length === 0 ? (
        <section className="flex flex-col gap-y-4">
          {[1, 2, 3, 4, 5, 6, 7].map((v) => (
            <CommentSkeleton key={v} />
          ))}
        </section>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            {Array.isArray(comments[postId]) &&
              comments[postId].map(
                (comment: CommentInterface, commentIndex) => (
                  <Comment
                    key={comment._id}
                    comment={comment}
                    commentIndex={commentIndex}
                  />
                )
              )}
          </div>
          {hasNextPage && (
            <div className="flex mt-8 items-center justify-center">
              <Button
                size="sm"
                onClick={() => {
                  fetchNextPage();
                }}
                variant="bordered"
                spinner={<Spinner />}
                isLoading={isPending}
                className="  text-black font-medium  border-gray-400 shadow-sm border-1  "
              >
                {isPending ? "Loading more comment" : "Load more comments"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Comments;
