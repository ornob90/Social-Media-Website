import CreatePostModal from "@/components/ui/createPost/CreatePostModal";
import { PageProps } from "@/types/global.types";
import React from "react";

const Page = ({ searchParams }: PageProps) => {
  const postAvailable = !searchParams
    ? "people"
    : searchParams["post-available"];

  return <CreatePostModal postAvailable={postAvailable as string} />;
};

export default Page;
