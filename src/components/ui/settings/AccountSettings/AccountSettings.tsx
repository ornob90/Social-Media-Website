import BioForm from "@/components/forms/BioForm/BioForm";
import KeyValueSettingsForm from "@/components/forms/KeyValueSettingsForm/KeyValueSettingsForm";
import Button from "@/components/html/Button/Button";
import SettingsEditBtn from "@/components/html/Button/SettingsEditBtn";
import Header from "@/components/shared/header/Header";
import ProfilePic from "@/components/shared/profilePic/ProfilePic";
import React from "react";
import PasswordSettings from "./PasswordSettings/PasswordSettings";

const AccountSettings = () => {
  return (
    <section className="mt-6">
      <div className="flex  justify-between">
        <Header header="Account" />
        <SettingsEditBtn />
      </div>
      <div className="flex flex-col gap-8">
        {/* Profile Pic  */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <ProfilePic className="h-[48px] w-[48px]" />
            <div>
              <p className="font-bold text-md">Profile photo</p>
              <p className="text-dark-gray text-[12px]">Change profile photo</p>
            </div>
          </div>
        </div>

        {/* Username  */}
        <KeyValueSettingsForm keyVal="Username" value="@short-name" />
        {/* Phone  */}
        <KeyValueSettingsForm keyVal="Phone" value="+8801989446061" />
        {/* Password  */}
        <PasswordSettings />
        {/* Bio */}
        <BioForm />
      </div>
    </section>
  );
};

export default AccountSettings;
