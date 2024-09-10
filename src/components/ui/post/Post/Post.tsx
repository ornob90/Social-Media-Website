import Like from "@/components/shared/postLinks/Like";
import Share from "@/components/shared/postLinks/Share";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import Comments from "./Comments/Comments";
import CommentLink from "@/components/shared/postLinks/CommentLink";
import { Post as PostInterface } from "@/types/post.types";
import AnimatedContainer from "@/components/containers/AnimatedContainers";
import PostedBy from "@/components/shared/postedby/PostedBy";
import Content from "@/components/shared/content/Content";
import SharedPost from "../SharedPost/SharedPost";

export interface PostProps {
  post: PostInterface;
  hideReactions?: boolean;
  removeBorder?: boolean;
  removePadding?: boolean;
}

const Post = ({
  post,
  hideReactions,
  removeBorder,
  removePadding,
}: PostProps) => {
  // states
  const [showComments, setShowComments] = useState(false);

  return (
    <AnimatedContainer
      layout={false}
      className={`dark:text-white bg-white  rounded-xl  shadow-sm flex flex-col gap-y-4 ${
        removeBorder ? "" : "border"
      } ${removePadding ? "" : "p-4"}`}
    >
      {/* Header and Name  */}
      <header>
        <PostedBy {...post?.user} />
      </header>
      {/* Content  */}
      <div className="flex flex-col gap-y-4">
        <Content className="lg:w-[90%]  text-sm" content={post?.content} />
        {post.images?.length > 0 && (
          <div className="relative w-full lg:w-[90%] h-[350px] md:h-[400px] lg:h-[450px] object-cover  rounded-md">
            <Image
              src={post.images[0]}
              fill
              alt="Alternate Image"
              className="rounded-md "
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      {post?.sharedPostId && (
        <div className="p-4 border rounded-xl">
          <SharedPost post={post.sharedPostId} />
        </div>
      )}

      {/* Like Share Comment  */}

      {!hideReactions && (
        <div className="flex gap-10 text-dark-gray  -mt-1">
          <Like
            likesCount={post.likesCount}
            postId={post._id}
            isLiked={post.isLiked}
            postedBy={post.user?._id}
          />
          <CommentLink
            onClick={() => setShowComments(!showComments)}
            commentsCount={post.commentsCount}
          />
          <Share post={post} />
        </div>
      )}
      {/* TODO  */}

      <AnimatedContainer isVisible={showComments} exit={{ opacity: 0, y: -50 }}>
        <Comments post={post} />
      </AnimatedContainer>
    </AnimatedContainer>
  );
};

export default Post;
