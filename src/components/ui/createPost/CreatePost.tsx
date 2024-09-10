"use client";
import PostForm from "@/components/forms/PostForm/PostForm";
import Header from "@/components/shared/header/Header";
import PostAvailable from "@/components/ui/post/PostAvailable/PostAvailable";
import { SearchParams } from "@/types/global.types";
import { useState } from "react";

const CreatePost = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const [privacy, setPrivacy] = useState<"public" | "private">("public");
  return (
    <section className="w-full no-scrollbar">
      <Header header="Create a Post" />
      {/* Post Availability  */}
      <div className="overflow-auto no-scrollbar">
        <div className="flex gap-4 min-w-[490px] overflow-scroll ">
          <PostAvailable
            src="/assets/globe.svg"
            alt="Globe Icon"
            type="People"
            subText="Your Post will be global"
            isActive={privacy === "public"}
            onClick={() => setPrivacy("public")}
          />
          <PostAvailable
            src="/assets/lock.svg"
            alt="Lock Icon"
            type="Private"
            subText="Your Post will be private"
            isActive={privacy === "private"}
            onClick={() => setPrivacy("private")}
          />
        </div>
      </div>
      <PostForm privacy={privacy} onCloseModal={onCloseModal} />
    </section>
  );
};

export default CreatePost;
