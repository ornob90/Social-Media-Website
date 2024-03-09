import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className=" text-red-600 text-[12px]">{children}</p>;
};

export default ErrorMessage;
