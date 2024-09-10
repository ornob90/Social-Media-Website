import React from "react";
import Post from "../Post/Post";
import { Post as PostInterface } from "@/types/post.types";

const SharedPost = ({ post }: { post: PostInterface }) => {
  return <Post post={post} hideReactions removeBorder removePadding />;
};

export default SharedPost;
