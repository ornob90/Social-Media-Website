"use client";

import Image from "next/image";
// import menuIcon from "/assets/menu.svg";
// import closeMenuIcon from "/assets/closeMenu.svg";
import Links from "../Links/Links";
import { navLinks } from "@/data/navLinks";
import { useAppSelector } from "@/lib/hooks";

const MobileMenu = () => {
  const menuOpen = useAppSelector((state) => state.nav.menuOpen);
  console.log(menuOpen);
  return (
    <div>
      <div className="relative h-[18px] sm:h-[20px] w-[18px] sm:w-[20px] md:hidden ">
        <Image src="/assets/menu.svg" fill alt="Mobile Menu Icon" />
      </div>

      {/* Menu Open Screen */}
      {/* <div
        className={`absolute md:hidden w-screen h-screen bg-light-gray top-0 left-0 z-10 ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <div className=" flex  justify-end items-center py-5 px-[5%]">
          <div className="relative h-[20px] sm:h-[24px] w-[20px] sm:w-[24px]">
            <Image
              src="/assets/closeMenu.svg"
              fill
              alt="Close Mobile Menu Icon"
            />
          </div>
        </div>

        <Links links={navLinks} flexRow />
      </div> */}
    </div>
  );
};

export default MobileMenu;
