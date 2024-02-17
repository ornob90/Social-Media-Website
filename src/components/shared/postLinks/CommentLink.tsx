import Image from "next/image";
import React from "react";

const CommentLink = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <Image
        src="/assets/message-gray.svg"
        width={20}
        height={20}
        alt="Like Icon"
      />
      <p>10k</p>
    </div>
  );
};

export default CommentLink;
