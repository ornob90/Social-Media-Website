import SettingsEditBtn from "@/components/html/Button/SettingsEditBtn";
import Header from "@/components/shared/header/Header";
import React from "react";
import PostSettingSection from "./PostSettingSection/PostSettingSection";

const PostSettings = () => {
  return (
    <section className="mt-6 mb-48">
      <div className="flex  justify-between">
        <Header header="Post" />
        <SettingsEditBtn />
      </div>
      <div className="flex flex-col gap-14">
        <PostSettingSection />
        <PostSettingSection />
        <PostSettingSection />
      </div>
    </section>
  );
};

export default PostSettings;
