import React from "react";

const Drawer = ({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <aside
      className={`hidden lg:flex mr-3 dark:bg-dark-primary sticky top-0 left-[5%] w-full duration-500 ${className}`}
    >
      {children}
    </aside>
  );
};

export default Drawer;
