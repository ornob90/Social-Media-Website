import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";
import Links from "./Links/LinksOld";
import { navDesktopLinks } from "@/data/navLinks";
const Navbar = () => {
  return (
    <nav className="dark:bg-dark-primary mx-auto w-full min-h-[50px] py-3  relative">
      <div className="max-w-[1512px] grid grid-cols-1 md:grid-cols-6 w-[90%] mx-auto items-center gap-4 md:gap-0 ">
        {/* Title and Logo */}
        <div className="flex items-center justify-between md:col-span-1 w-max">
          {/* Header  */}
          <div className="flex items-center h-full gap-4 text-sm md:text-base justify-between w-full md:w-max">
            <p className="font-bold text-xl dark:text-white">WaveChat</p>
            <div className="md:hidden">
              <Links mobile navLinks={navDesktopLinks} />
            </div>
          </div>
          {/* Menu Icon  */}
          <MobileMenu />
        </div>

        {/* Search and  Nav Links for Desktop*/}
        <div className="flex items-center  justify-end gap-4 md:col-span-5">
          <Search />
          <Links navLinks={navDesktopLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
