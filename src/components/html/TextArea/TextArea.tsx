import { InputType } from "@/types/html.types";
import React from "react";

const TextArea = ({ className }: InputType) => {
  return (
    <textarea
      className={`focus:outline-none min-h-[100px] dark:bg-dark-gray bg-light-gray w-full dark:text-white rounded-lg ${className} `}
    />
  );
};

export default TextArea;
