"use client";
import { LinkType } from "@/types/global.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Links = {
  mobile?: boolean;
  setMenuOpen?: Function;
  navLinks: LinkType[];
  flexCol?: boolean;
};

const Links = ({ mobile, setMenuOpen, navLinks, flexCol }: Links) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeSideNav = searchParams.get("active-side-nav");
  return (
    <ul
      className={`${
        mobile
          ? "flex gap-3   items-end px-[10%]"
          : "justify-end items-center hidden  md:flex "
      } ${flexCol ? "flex-col gap-2" : "gap-4"}`}
    >
      {navLinks?.map((link) => (
        <li key={link.src} className={`${flexCol ? "w-full" : ""} `}>
          <Link
            href={link.href}
            className={` flex items-center ${
              pathname === link.href
                ? "text-dark font-bold rounded-[8px]"
                : "text-light"
            }
            ${
              flexCol
                ? "flex gap-2 hover:bg-light-gray hover:rounded-[14px] duration-300 px-4 py-3 border-b"
                : ""
            }
            ${
              flexCol && activeSideNav === link?.name?.toLocaleLowerCase()
                ? "bg-light-gray rounded-[14px]"
                : ""
            }
            ${
              flexCol && pathname === link?.href && !activeSideNav
                ? "bg-light-gray rounded-[14px]"
                : ""
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
            {link.showName && (
              <p className="font-semibold text-md">{link.name}</p>
            )}
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
