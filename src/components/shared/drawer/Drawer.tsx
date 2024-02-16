import React from "react";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className=" min-h-screen bg-red-500 sticky top-0 left-[5%] hover:w-0 w-full duration-500">
      {children}
    </aside>
  );
};

export default Drawer;
