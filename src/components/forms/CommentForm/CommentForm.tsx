import Button from "@/components/html/Button/Button";
import TextArea from "@/components/html/TextArea/TextArea";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const CommentForm = () => {
  return (
    <form
      action=""
      className="p-4 border border-light-gray dark:border-dark-gray shadow-sm rounded-xl mb-10"
    >
      <div className="flex gap-2 items-start mb-4 rounded-xl">
        <ProfilePic />
        <TextArea className="pt-2 pl-4" />
      </div>
      <div className="w-full flex justify-end">
        <Button className="py-2 px-8  rounded-lg text-sm">Post</Button>
      </div>
    </form>
  );
};

export default CommentForm;
