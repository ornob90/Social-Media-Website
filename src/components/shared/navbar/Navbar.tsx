import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";
import Links from "./Links/Links";
const Navbar = () => {
  return (
    <nav className=" mx-auto w-full md:bg-white min-h-[50px] py-3  relative">
      <div className="max-w-[1512px] grid grid-cols-1 md:grid-cols-6 w-[90%] mx-auto items-center gap-4 md:gap-0 ">
        {/* Title and Logo */}
        <div className="flex items-center justify-between md:col-span-2">
          {/* Header  */}
          <div className="flex items-center h-full gap-4 text-sm md:text-base justify-between w-full md:w-max">
            <p className="font-bold text-xl">WaveChat</p>
            <div className="md:hidden">
              <Links mobile />
            </div>
          </div>
          {/* Menu Icon  */}
          <MobileMenu />
        </div>

        {/* Search and  Nav Links for Desktop*/}
        <div className="flex items-center justify-between md:col-span-4 ">
          <Search />
          <Links />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
