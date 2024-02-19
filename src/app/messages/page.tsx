import Header from "@/components/shared/header/Header";
import Message from "@/components/ui/message/Message/Message";
import React from "react";

const MessagePage = () => {
  return (
    <section>
      <Header header="Message" />

      {/* Messages  */}
      <div className="flex flex-col gap-4 divide-y">
        {[1, 2, 3, 4].map((value) => (
          <Message key={value} />
        ))}
      </div>
    </section>
  );
};

export default MessagePage;
