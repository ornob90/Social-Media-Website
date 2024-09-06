import React from "react";

const Header = ({
  header,
  className,
}: {
  header: string;
  className?: string;
}) => {
  return (
    <h1
      className={`font-bold text-2xl lg:text-[28px] mb-7 dark:text-white ${className}`}
    >
      {header}
    </h1>
  );
};

export default Header;
