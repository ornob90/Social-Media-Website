import FollowBtn from "@/components/html/Button/FollowBtn";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const People = () => {
  return (
    <div className="flex gap-2 items-center justify-between py-8">
      <div className="flex gap-4 items-center">
        <ProfilePic className="w-[33px] h-[33px] md:h-[37px] md:w-[37px]" />
        <div className="flex flex-col  justify-between w-[80%] md:w-auto">
          <h3 className="font-bold text-md">Elon Mask</h3>
          <p className="text-dark-gray text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
            corporis.
          </p>
        </div>
      </div>
      <FollowBtn />
    </div>
  );
};

export default People;
