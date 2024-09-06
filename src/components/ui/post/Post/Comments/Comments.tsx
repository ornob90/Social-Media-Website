import Header from "@/components/shared/header/Header";
import React from "react";
import Comment from "./Comment";
import CommentForm from "@/components/forms/CommentForm/CommentForm";
import { Button } from "@nextui-org/button";

const Comments = () => {
  return (
    <div className="mt-10">
      <Header header={`Comments | ${15}K`} className="!text-lg" />
      <CommentForm />

      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((key) => (
          <Comment key={key} />
        ))}
      </div>
      <div className="flex mt-8 items-center justify-center">
        <Button
          size="sm"
          variant="bordered"
          className="  text-black font-medium  border-gray-400 shadow-sm border-1  "
        >
          Load More Comments
        </Button>
      </div>
    </div>
  );
};

export default Comments;
