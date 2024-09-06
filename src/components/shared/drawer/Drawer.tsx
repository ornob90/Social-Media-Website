"use client";

import { useAppSelector } from "@/hooks/redux-types";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const menuOpen = useAppSelector((state) => state.nav.menuOpen);

  return (
    <aside
      className={`  bg-white p-4 rounded-xl dark:bg-dark-primary sticky top-[5vw] left-[5%] duration-500  ${
        menuOpen ? "w-full h-[calc(100vh-60px)]" : "w-0 lg:w-full h-0 lg:h-auto"
      }`}
    >
      <div className={`${menuOpen ? "" : "hidden lg:opacity-100 lg:block"} `}>
        {children}
      </div>
    </aside>
  );
};

export default Drawer;
