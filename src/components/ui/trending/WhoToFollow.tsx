import FollowBtn from "@/components/html/Button/FollowBtn";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const WhoToFollow = () => {
  return (
    <section className="flex flex-col gap-y-8 p-4 rounded-xl bg-white">
      <h2 className=" text-xl font-semibold">Who to follow</h2>
      <section className=" flex flex-col gap-y-6">
        {[1, 2, 3].map((v) => (
          <UserToFollow key={v} />
        ))}
      </section>
    </section>
  );
};

function UserToFollow() {
  return (
    <div className="flex gap-x-2  justify-between xl:justify-start items-center">
      <div className="flex flex-1">
        <div className="min-w-6 xl:min-w-10">
          <ProfilePic className="  max-w-6 max-h-6 xl:max-w-10 xl:max-h-10 !size-6 xl:size-10" />
        </div>
        <div className=" font-medium flex flex-col justify-between   ">
          <p className=" truncate text-xs xl:text-sm">Florian Wather</p>
          <p className="text-xs    text-gray-400">@Florian</p>
        </div>
      </div>
      <FollowBtn className=" text-xs !px-2" />
    </div>
  );
}

export default WhoToFollow;
