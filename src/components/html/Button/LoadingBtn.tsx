import React from "react";

const LoadingBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-2 bg-primary rounded-lg text-white w-full flex justify-center items-center gap-3">
      <p className="loading loading-spinner loading-sm "></p>
      <p>{children}</p>
    </div>
  );
};

export default LoadingBtn;
