import React from "react";
import ProfilePic from "../profilePic/ProfilePic";
import { User } from "@/types/user.types";

export interface PostedByProps extends User {}

const PostedBy = ({ photoUrl, displayName, userName }: PostedByProps) => {
  return (
    <section className="flex  items-center gap-2 h-max  ">
      <ProfilePic className="size-9" url={photoUrl} />
      <ul className="flex flex-col justify-between">
        <li className="font-semibold">{displayName}</li>
        <li className="text-dark-gray text-sm">@{userName} . 11m</li>
      </ul>
    </section>
  );
};

export default PostedBy;
