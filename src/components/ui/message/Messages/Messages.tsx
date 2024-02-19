"use client";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React, { useEffect, useRef } from "react";

const Messages = () => {
  const messageDivRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = messageDivRef.current;

    if (container) {
      container.scrollTo({ top: container.scrollHeight });
    }
  }, []);

  return (
    <ul
      ref={messageDivRef}
      className="flex flex-col gap-6 max-h-full overflow-auto"
    >
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <React.Fragment key={value}>
          <li className="flex gap-2 items-end w-[90%] md:w-[80%] lg:w-[60%]">
            <ProfilePic className="w-[25px] h-[25px] md:h-[30px] md:w-[30px]" />
            <p className="w-[90%] text-sm h-auto bg-light-gray p-2 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              numquam quia error ipsum dolores! Atque officiis iure totam esse
              nulla. Veniam, fuga? Iusto, eius praesentium fugiat ipsum
              accusantium expedita suscipit.
            </p>
          </li>

          <li className="flex flex-row-reverse justify-end gap-2 items-end w-full">
            <ProfilePic className="w-[25px] h-[25px] md:h-[30px] md:w-[30px]" />
            <div className="w-full flex justify-end">
              <p className="text-sm h-auto w-[90%] md:w-[80%] lg:w-[60%] bg-light-gray p-2 rounded-md">
                Lorem ipsum dolor sit amet consectaesentium fugiat ipsum
                accusantium expedita suscipit.etur adipisicing elit.
              </p>
            </div>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Messages;
