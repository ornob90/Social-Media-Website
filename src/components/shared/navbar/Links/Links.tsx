import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <ul className="flex-col gap-2">
      <li className="bg-light-gray py-3 px-3 font-semibold dark:text-white dark:bg-dark-gray rounded-lg shadow-sm">
        Home
      </li>
      <li>Profile</li>
    </ul>
  );
};

export default Links;
