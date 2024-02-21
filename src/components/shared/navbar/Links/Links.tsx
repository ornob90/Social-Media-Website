"use client";
import { LinkType, SearchParams } from "@/types/global.types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Links = {
  links: LinkType[];
  searchParams?: SearchParams;
  disableActive?: boolean;
  flexRow?: boolean;
};

const Links = ({ links, searchParams, disableActive, flexRow }: Links) => {
  const activeNav: string =
    searchParams && typeof searchParams["active-side-nav"] === "string"
      ? searchParams["active-side-nav"]
      : "home";

  const path = usePathname();

  return (
    <ul
      className={`flex ${
        flexRow ? "flex-row items-center gap-2" : "flex-col gap-2"
      }`}
    >
      {links?.map((link: LinkType) => (
        <li key={link.alt}>
          <Link
            href={link.href}
            className={`hover:bg-light-gray hover:dark:bg-dark-gray duration-300  font-semibold dark:text-white  rounded-lg shadow-sm flex gap-2 items-center ${
              flexRow ? "" : "py-3 px-3"
            } ${
              !disableActive && path === link.href
                ? "bg-light-gray dark:bg-dark-gray dark:text-white"
                : ""
            }`}
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
            />
            {link.showName && <p className="text-[14px]">{link.name}</p>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
