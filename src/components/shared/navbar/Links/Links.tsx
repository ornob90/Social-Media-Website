"use client";
import { LinkType } from "@/types/global.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Links = {
  mobile?: boolean;
  setMenuOpen?: Function;
  navLinks: LinkType[];
  flexCol?: boolean;
};

const Links = ({ mobile, setMenuOpen, navLinks, flexCol }: Links) => {
  const pathname = usePathname();

  return (
    <ul
      className={`${
        mobile
          ? "flex gap-3   items-end px-[10%]"
          : "justify-end items-center hidden gap-4 md:flex "
      } ${flexCol ? "flex-col" : ""}`}
    >
      {navLinks?.map((link) => (
        <li key={link.src}>
          <Link
            href={link.href}
            className={`flex items-center ${
              pathname === link.href ? "text-dark font-bold" : "text-light"
            }
          `}
            onClick={() => mobile && setMenuOpen?.(false)}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
            />
            {link.showName && link.name}
          </Link>
        </li>
      ))}

      {/* <li
        className={`border-2 border-black  rounded-full ${
          mobile ? "w-[30px] h-[24px]" : "h-[33px] w-[33px]"
        }`}
      ></li> */}
    </ul>
  );
};

export default Links;
