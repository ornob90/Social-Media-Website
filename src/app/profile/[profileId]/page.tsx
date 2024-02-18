import Posts from "@/components/ui/post/Posts/Posts";
import ProfileHeader from "@/components/ui/profile/ProfileHeader";
import React from "react";

const Profile = () => {
  const profileStates = [
    {
      name: "Follower",
      stat: "15K",
    },
    {
      name: "Following",
      stat: "3.4M",
    },
    {
      name: "Posts",
      stat: "12K",
    },
    {
      name: "Friends",
      stat: "10K",
    },
  ];

  return (
    <section className="">
      <ProfileHeader />
      {/* Profile States  */}
      <div className="grid grid-cols-4 gap-4 mt-5 ">
        {profileStates?.map(({ name, stat }) => (
          <div
            key={name}
            className="flex flex-col items-center border border-light-gray shadow-sm py-4"
          >
            <h3 className="text-lg sm:text-2xl font-bold">{stat}</h3>
            <p className="text-dark-gray text-[12px] md:text-sm">{name}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Posts />
      </div>
    </section>
  );
};

export default Profile;
