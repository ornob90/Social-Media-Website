import React from "react";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className=" min-h-screen mr-3 dark:bg-dark-primary sticky top-0 left-[5%] w-full duration-500">
      {children}
    </aside>
  );
};

export default Drawer;
