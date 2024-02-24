import React from "react";

const PostSettingSection = () => {
  return (
    <div className=" flex gap-4 flex-col">
      <h3 className="font-bold text-md">Visibility</h3>
      <p className="text-sm text-dark-gray">
        Anyone can reply to your Post. You can change this setting anytime
      </p>

      <div className="border-2 rounded-md shadow-sm border-light-gray p-4 flex justify-between text-sm font-medium">
        <p>Everyone</p>
        <div className=" size-[18px] flex justify-center items-center rounded-full border-2 border-primary">
          <div className="size-[10px] rounded-full bg-primary"></div>
        </div>
      </div>

      <div className="border-2 rounded-md shadow-sm border-light-gray p-4 flex justify-between text-sm font-medium">
        <p>Follow / Friends</p>
        <div className=" size-[18px] flex justify-center items-center rounded-full border-2 border-dark-gray">
          <div className="size-[10px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default PostSettingSection;
