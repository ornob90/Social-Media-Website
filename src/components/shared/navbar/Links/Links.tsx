import { LinkType } from "@/types/global.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Links = {
  links: LinkType[];
};

const Links = ({ links }: Links) => {
  return (
    <ul className="flex-col gap-3">
      {links?.map((link: LinkType) => (
        <li key={link.alt} className="mt-2">
          <Link
            href="/"
            className="hover:bg-light-gray py-3 px-3 font-semibold dark:text-white dark:bg-dark-gray rounded-lg shadow-sm flex gap-2 items-center"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
            />
            <p className="text-[14px]">{link.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
