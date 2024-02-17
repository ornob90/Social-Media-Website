import Header from "@/components/shared/header/Header";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="mt-10">
      <Header header={`Comments | ${15}K`} />
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5].map((key) => (
          <Comment key={key} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
