"use client";
import React, { useEffect } from "react";
import Post from "../Post/Post";
import { Post as PostInterface } from "@/types/post.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getNewsFeedPosts } from "@/actions/post/post.actions";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, PostInitialState } from "@/redux/features/postSlice";

interface PostsProp {
  initialPosts: PostInterface[];
  totalPosts?: number;
  fetchPosts: any;
}

const Posts = ({ initialPosts, fetchPosts }: PostsProp) => {
  // states

  // redux hooks
  const { posts } = useSelector(
    (state: { post: PostInitialState }) => state.post
  );
  const dispatch = useDispatch();

  // custom hooks

  // package hooks
  const { ref, inView } = useInView();

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery<PostInterface[] | null>({
      queryKey: ["posts"],
      queryFn: async ({ pageParam = 1 }) => {
        const result = await fetchPosts(pageParam as number);

        return result.posts;
      },
      initialData: {
        pages: [initialPosts],
        pageParams: [1],
      },
      initialPageParam: 1,
      getNextPageParam(lastPage, allPages) {
        return lastPage && lastPage?.length > 0
          ? allPages.length + 1
          : undefined;
      },
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    });

  // functions

  // effects
  useEffect(() => {
    // console.log({ inView });
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    const postsToSave: PostInterface[] = [];

    data?.pages?.map((group) => {
      group?.map((post) => {
        postsToSave.push(post);
      });
    });

    dispatch(addPosts(postsToSave));
  }, [data]);

  return (
    <section className="flex flex-col gap-[60px]">
      {posts?.map((post) => (
        <Post post={post} key={post._id} />
      ))}

      <div ref={ref}>
        <PostSkeleton />
      </div>
    </section>
  );
};

export default Posts;
