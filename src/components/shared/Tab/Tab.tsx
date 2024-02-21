import Link from "next/link";
import React from "react";

const Tab = ({ tab }: { tab: string | string[] }) => {
  const tabIndex = ["Posts", "People"];

  return (
    <ul className="flex items-center w-full">
      {tabIndex.map((tabKey) => (
        <li key={tabKey} className="w-full flex-1 flex">
          <Link
            className={`text-center py-2 w-full  ${
              tab === tabKey.toLowerCase()
                ? "border-b-2 border-b-primary  font-bold"
                : ""
            }`}
            href={`/search?tab=${tabKey.toLowerCase()}`}
          >
            {tabKey}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
