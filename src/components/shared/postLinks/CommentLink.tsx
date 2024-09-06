import { formatNumber } from "@/utils/formatNumber";
import Image from "next/image";
import React from "react";

export interface CommentLinkProp {
  commentsCount: number;
}

const CommentLink = ({ commentsCount }: CommentLinkProp) => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <Image
        src="/assets/message-gray.svg"
        width={20}
        height={20}
        alt="Like Icon"
      />
      <p>{formatNumber(commentsCount || 0)}</p>
    </div>
  );
};

export default CommentLink;
