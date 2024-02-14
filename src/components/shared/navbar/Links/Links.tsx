"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Links = {
  mobile?: Boolean;
  setMenuOpen?: Function;
};

const Links = ({ mobile, setMenuOpen }: Links) => {
  const pathname = usePathname();

  return (
    <ul
      className={`${
        mobile
          ? "flex gap-3   items-end px-[10%]"
          : "justify-end items-center hidden gap-4 md:flex "
      }`}
    >
      <li>
        <Link
          href="/"
          className={`flex items-center ${
            pathname === "/" ? "text-dark font-bold" : "text-light"
          }
          `}
          onClick={() => mobile && setMenuOpen?.(false)}
        >
          <Image
            src="/assets/message.svg"
            alt="Message Icon"
            width={25}
            height={25}
          />
          {/* Home */}
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className={`flex items-center ${
            pathname === "/blogs" ? "text-dark font-bold" : "text-light"
          }`}
          onClick={() => mobile && setMenuOpen?.(false)}
        >
          <Image
            src="/assets/notification.svg"
            alt="Notification Icon"
            width={25}
            height={25}
          />
          {/* Blog */}
        </Link>
      </li>
      <li
        className={`border-2 border-black  rounded-full ${
          mobile ? "w-[30px] h-[24px]" : "h-[33px] w-[33px]"
        }`}
      ></li>
    </ul>
  );
};

export default Links;
