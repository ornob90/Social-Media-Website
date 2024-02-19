import Input from "@/components/html/Input/Input";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Image from "next/image";
import React from "react";

const SendMessageForm = () => {
  return (
    <form
      action=""
      className="absolute -bottom-[15%] w-full right-0 py-8   flex gap-4 items-center "
    >
      <ProfilePic className="w-[25px] h-[25px] md:h-[30px] md:w-[30px]" />
      <Input
        placeholder="Type Your Message.."
        className="w-[90%] py-2 bg-light-gray pl-4"
      />
      <div className="relative right-0 top-[10%] w-[20px] h-[20px]">
        <Image src="/assets/send.svg" alt="Send Icon" fill />
      </div>
    </form>
  );
};

export default SendMessageForm;
