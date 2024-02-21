import { PostAvailableType } from "@/types/post.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostAvailable = ({
  src,
  alt,
  type,
  subText,
  isActive,
}: PostAvailableType) => {
  return (
    <Link
      href={`/createPost?post-available=${type.toLowerCase()}`}
      className={`flex-1 flex gap-3 py-2 ${
        isActive ? "bg-light-gray dark:bg-dark-gray rounded-md " : ""
      }`}
    >
      <div className="flex bg-light-gray dark:bg-dark-gray justify-center items-center px-4 rounded-md">
        <Image src={src} alt={alt} height={18} width={18} />
      </div>
      <div className="flex justify-between flex-col">
        <h3 className="font-bold dark:text-white">{type}</h3>
        <p
          className={`text-dark-gray text-[12px] sm:text-sm ${
            isActive ? "dark:text-black" : ""
          }`}
        >
          {subText}
        </p>
      </div>
    </Link>
  );
};

export default PostAvailable;
