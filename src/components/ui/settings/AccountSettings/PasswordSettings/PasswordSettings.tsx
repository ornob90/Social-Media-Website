import React from "react";

const PasswordSettings = () => {
  return (
    <div className="flex justify-between items-center text-dark dark:text-white">
      <p>password</p>
      <input
        type="password"
        className="w-max  text-end focus:outline-none bg-white dark:bg-dark-primary"
        disabled
        value="This-is-password"
      />
    </div>
  );
};

export default PasswordSettings;
