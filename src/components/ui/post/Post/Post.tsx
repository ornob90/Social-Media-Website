import Like from "@/components/shared/postLinks/Like";
import Share from "@/components/shared/postLinks/Share";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";
import React from "react";
import Comments from "./Comments/Comments";
import CommentLink from "@/components/shared/postLinks/CommentLink";
import { Post as PostInterface } from "@/types/post.types";

const Post = ({ post }: { post: PostInterface }) => {
  return (
    <div className="dark:text-white">
      {/* Header and Name  */}
      <header className="flex  items-center gap-2 h-max py-2 ">
        <ProfilePic className="size-9" url={post?.user?.photoUrl} />
        <ul className="flex flex-col justify-between">
          <li className="font-semibold">{post?.user?.displayName}</li>
          <li className="text-dark-gray text-sm">
            @{post?.user?.userName} . 11m
          </li>
        </ul>
      </header>
      {/* Content  */}
      <div>
        <p className="lg:w-[90%] mt-3 text-sm">{post.content}</p>
        {post.images?.length > 0 && (
          <div className="relative w-full lg:w-[90%] h-[350px] md:h-[400px] lg:h-[450px] object-cover mt-5 rounded-md">
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

      {/* Like Share Comment  */}

      <div className="flex gap-10 text-dark-gray mt-3 ">
        <Like
          likesCount={post.likesCount}
          postId={post._id}
          isLiked={post.isLiked}
        />
        <CommentLink commentsCount={post.commentsCount} />
        <Share />
      </div>
      {/* TODO  */}
      <div className="">
        <Comments />
      </div>
    </div>
  );
};

export default Post;
