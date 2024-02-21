"use client";

import { useAppSelector } from "@/lib/hooks";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const menuOpen = useAppSelector((state) => state.nav.menuOpen);

  return (
    <aside
      className={` mr-3 dark:bg-dark-primary sticky top-0 left-[5%] h-screen  duration-500  ${
        menuOpen ? "w-full" : "w-0 lg:w-full h-0 lg:h-auto"
      }`}
    >
      <div
        className={`${menuOpen ? "" : "opacity-0 lg:opacity-100 lg:block"} `}
      >
        {children}
      </div>
    </aside>
  );
};

export default Drawer;
