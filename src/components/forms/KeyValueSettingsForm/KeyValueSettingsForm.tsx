import { KeyValueSettingsType } from "@/types/settings.types";
import React from "react";

const KeyValueSettingsForm = ({ keyVal, value }: KeyValueSettingsType) => {
  return (
    <div className="flex justify-between items-center text-dark dark:text-white">
      <p>{keyVal}</p>
      <input
        type="text"
        value={value}
        className="w-max  text-end focus:outline-none bg-white dark:bg-dark-primary"
        disabled
      />
    </div>
  );
};
export default KeyValueSettingsForm;
