import CreatePost from "@/components/ui/createPost/CreatePost";
import { PageProps } from "@/types/global.types";
import React, { useState } from "react";

const Page = ({ searchParams }: PageProps) => {
  const postAvailable = !searchParams
    ? "people"
    : searchParams["post-available"];

  return <CreatePost postAvailable={postAvailable as string} />;
};

export default Page;
