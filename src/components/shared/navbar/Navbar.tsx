import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Search from "./Search/Search";

import ProfilePic from "../profilePic/ProfilePic";
import Links from "./Links/Links";
import { navLinks } from "@/data/navLinks";

const Navbar = () => {
  return (
    <nav className="dark:bg-dark-primary mx-auto w-full min-h-[50px] py-3  relative">
      <div className="max-w-[1512px] grid grid-cols-1 md:grid-cols-6 w-[90%] mx-auto items-center gap-4 md:gap-0 ">
        {/* Title and Logo */}
        <div className="flex items-center gap-2  justify-between md:col-span-1  ">
          {/* Header  */}
          <div className="flex items-center h-full text-sm md:text-base justify-between w-full md:w-max ">
            <div className="flex items-center gap-2">
              <MobileMenu />
              <p className="font-bold text-xl dark:text-white flex items-center gap-2 ">
                Wave<span className="text-primary">Chat</span>
              </p>
            </div>

            <div className="md:hidden">
              <Links links={navLinks} flexRow />
            </div>
          </div>
          {/* Menu Icon  */}
          <div className="md:hidden ml-4 ">
            <ProfilePic />
          </div>
        </div>

        {/* Search and  Nav Links for Desktop*/}
        <div className="flex items-center  justify-end gap-4 md:col-span-5">
          <Search />
          <div className="md:flex items-center gap-4 hidden ">
            <Links links={navLinks} flexRow />
            <ProfilePic />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
