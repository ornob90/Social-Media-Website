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
    <div className="flex gap-x-2  justify-between items-center">
      <ProfilePic className=" size-10" />
      <div className="flex-1 font-medium flex flex-col justify-between  ">
        <p>Florian Wather</p>
        <p className="text-sm    text-gray-400">@Florian</p>
      </div>
      <FollowBtn />
    </div>
  );
}

export default WhoToFollow;
