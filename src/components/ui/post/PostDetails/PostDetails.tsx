"use client";
import { getPostDetails } from "@/actions/post/post.actions";
import PostSkeleton from "@/components/skeletons/PostSkeleton";
import Post from "@/components/ui/post/Post/Post";
import { useAppSelector } from "@/hooks/redux-types";
import useGetPostDetails from "@/hooks/useGetPostDetails";
import { Post as PostInterface } from "@/types/post.types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostDetailsModal from "./PostDetailsModal";

const PostDetails = () => {
  // states
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Router Hooks
  const params = useParams<{ postId: string }>();

  const { loading, post } = useGetPostDetails(params.postId);

  if (loading) return <PostSkeleton />;

  return (
    <section className="">
      {post && (
        <Post
          post={post}
          defaultShowComments
          onModalChange={() => setIsModalOpen(!isModalOpen)}
        />
      )}
      <PostDetailsModal
        disabledInitialOpen
        isModalOpen={isModalOpen}
        onModalChange={() => {
          setIsModalOpen(!isModalOpen);
        }}
      />
    </section>
  );
};

export default PostDetails;
