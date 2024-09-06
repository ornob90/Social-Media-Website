import { Button } from "@nextui-org/button";
// import TextArea from "@/components/html/TextArea/TextArea";
import { Textarea } from "@nextui-org/input";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const CommentForm = () => {
  return (
    <form
      action=""
      className="p-4 border border-light-gray dark:border-dark-gray shadow-sm rounded-xl mb-10"
    >
      <div className="flex gap-4 mb-4 rounded-xl">
        <ProfilePic />
        <Textarea
          variant="faded"
          label="Write Something.."
          labelPlacement="inside"
          size="sm"
          className="-mt-2  border-primary focus:!border-b-gray-200"
          style={{
            border: "none",
          }}
        />
      </div>
      <div className="w-full flex justify-end">
        <Button
          className="py-2 px-8  rounded-lg text-sm  bg-primary text-white"
          size="sm"
          variant="bordered"
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
