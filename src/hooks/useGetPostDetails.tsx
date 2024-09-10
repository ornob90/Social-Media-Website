"use client";

import { getPostDetails } from "@/actions/post/post.actions";
import { useAppSelector } from "@/hooks/redux-types";
import { Post as PostInterface } from "@/types/post.types";
import { useEffect, useState } from "react";

const useGetPostDetails = (postId: string) => {
  // States
  const [post, setPost] = useState<PostInterface | null>(null);
  const [loading, setLoading] = useState(true);

  // Redux Hooks
  const postFromStore = useAppSelector((state) => state.post.curSelectedPost);

  // Fetch post details function
  const getPostFromDB = async () => {
    try {
      setLoading(true);
      const post = await getPostDetails(postId);
      setPost(post);
    } catch (error: any) {
      console.error("Error fetching post details:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch post details
  useEffect(() => {
    if (postFromStore) {
      setPost(postFromStore);
      setLoading(false);
    } else {
      getPostFromDB();
    }
  }, [postFromStore]);

  return { post, loading };
};

export default useGetPostDetails;
