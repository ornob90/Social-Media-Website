import React from "react";

const PostSkeleton = () => {
  return (
    <div className="dark:text-white ">
      {/* Header and Name Skeleton */}
      <header className="flex items-center gap-2 h-max py-2">
        <div className="w-[30px] h-[30px] md:h-[33px] animate-pulse md:w-[33px] bg-gray-200 rounded-full"></div>
        <ul className="flex flex-col justify-between">
          <li className="w-24 animate-pulse h-4 bg-gray-200 rounded-md"></li>
          <li className="w-16 animate-pulse h-3 bg-gray-200 rounded-md mt-1"></li>
        </ul>
      </header>
      {/* Content Skeleton */}
      <div>
        <div className="w-[90%] h-8 bg-gray-200 animate-pulse rounded-md mt-3"></div>

        {/* Image Skeleton */}
        <div className="relative w-full lg:w-[90%] h-[250px] bg-gray-200 rounded-md mt-5"></div>
      </div>
      {/* Like Share Comment Skeleton */}
      <div className="flex gap-10 text-dark-gray mt-3 animate-pulse">
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-3 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
