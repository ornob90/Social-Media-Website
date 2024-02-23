"use client";

import { useAppSelector } from "@/lib/redux/hooks";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const menuOpen = useAppSelector((state) => state.nav.menuOpen);

  return (
    <aside
      className={` mr-3 dark:bg-dark-primary sticky top-0 left-[5%] duration-500  ${
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
