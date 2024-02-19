import SendMessageForm from "@/components/forms/SendMessageForm/SendMessageForm";
import Header from "@/components/shared/header/Header";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import Messages from "@/components/ui/message/Messages/Messages";
import React from "react";

const MessageDetails = () => {
  return (
    <section className="min-h-[400px] max-h-[calc(100vh - 104px - 10px)] md:max-h-[calc(100vh-60px]  relative">
      <Header header="Towfiq" />
      <div className="flex justify-between h-[60vh] md:h-[70vh] overflow-y-auto pb-4">
        <Messages />
      </div>
      <SendMessageForm />
    </section>
  );
};

export default MessageDetails;
