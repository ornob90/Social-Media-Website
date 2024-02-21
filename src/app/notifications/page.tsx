import Header from "@/components/shared/header/Header";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";

const NotificationsPage = () => {
  return (
    <section>
      <Header header="Notifications" />
      <section className="flex flex-col mt-12 gap-6 ">
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <div key={value} className="flex gap-2 items-center">
            <ProfilePic className="h-[37px] w-[37px]" />
            <div className="flex flex-col  justify-between w-[80%] md:w-auto">
              <h3 className="font-bold text-md">Elon Mask</h3>
              <p className="text-dark-gray text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                corporis.
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default NotificationsPage;
