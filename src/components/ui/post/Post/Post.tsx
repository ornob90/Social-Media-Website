import Like from "@/components/shared/postLinks/Like";
import Share from "@/components/shared/postLinks/Share";
import React, { useState } from "react";
import Comments from "./Comments/Comments";
import CommentLink from "@/components/shared/postLinks/CommentLink";
import { Post as PostInterface } from "@/types/post.types";
import AnimatedContainer from "@/components/containers/AnimatedContainers";
import PostedBy from "@/components/shared/postedby/PostedBy";
import Content from "@/components/shared/content/Content";
import SharedPost from "../SharedPost/SharedPost";
import ImagesGrid from "@/components/shared/images-grid/ImagesGrid";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateTopRowFieldOfPostSlice } from "@/redux/features/postSlice";

export interface PostProps {
  post: PostInterface;
  hideReactions?: boolean;
  removeBorder?: boolean;
  removePadding?: boolean;
  defaultShowComments?: boolean;
  onModalChange?: () => void;
}

const Post = ({
  post,
  hideReactions,
  removeBorder,
  removePadding,
  defaultShowComments,
  onModalChange,
}: PostProps) => {
  // states
  const [showComments, setShowComments] = useState(defaultShowComments);

  // routes hooks
  const router = useRouter();
  const pathname = usePathname();
  const isPostDetailPage = pathname.startsWith("/posts");

  // redux hooks
  const dispatch = useDispatch();

  // functions
  const handleOnImageClick = (idx: number) => {
    dispatch(
      updateTopRowFieldOfPostSlice({
        key: "curSelectedPost",
        value: post,
      })
    );

    if (isPostDetailPage) {
      onModalChange && onModalChange();
    }

    if (!isPostDetailPage) {
      router.push(`/posts/${post._id}?imageIndex=${idx}`);
    }
  };

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
          <ImagesGrid onImageClick={handleOnImageClick} images={post.images} />
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
