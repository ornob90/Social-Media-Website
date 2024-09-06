"use client";
import React, { useEffect } from "react";
import Post from "../Post/Post";
import { Post as PostInterface } from "@/types/post.types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getNewsFeedPosts } from "@/actions/post/post.actions";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import { useInView } from "react-intersection-observer";

interface PostsProp {
  initialPosts: PostInterface[];
  totalPosts: number;
  fetchPosts: any;
}

const Posts = ({ initialPosts, fetchPosts }: PostsProp) => {
  // states

  // redux hooks

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
    console.log({ inView });
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  console.log(data);

  return (
    <section className="flex flex-col gap-[60px]">
      {data?.pages?.map((group, i) => (
        <React.Fragment key={i}>
          {Array.isArray(group) &&
            group?.map((post: PostInterface) => (
              <Post post={post} key={post._id} />
            ))}
        </React.Fragment>
      ))}

      <div ref={ref}>
        <PostSkeleton />
      </div>
    </section>
  );
};

export default Posts;
