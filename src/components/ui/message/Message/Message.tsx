import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const Message = () => {
  return (
    <div className="flex gap-4 items-center pt-4">
      <ProfilePic className="w-[35px] h-[35px] md:h-[40px] md:w-[40px]" />
      <div className="w-[90%] flex justify-between items-end">
        <div>
          <p>Jack</p>
          <p className="text-dark-gray text-sm">Hey, how are you doing?</p>
        </div>
        <p className="text-sm text-dark-gray">Just now</p>
      </div>
    </div>
  );
};

export default Message;
