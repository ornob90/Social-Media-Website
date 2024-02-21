import { LinkType } from "@/types/global.types";

export const navDesktopLinks: LinkType[] = [
  {
    src: "/assets/message.svg",
    width: 25,
    height: 25,
    alt: "Message Icon",
    href: "/", // TODO,
    name: "",
    showName: false,
  },
  {
    src: "/assets/notification.svg",
    width: 25,
    height: 25,
    alt: "Notification Icon",
    href: "/", // TODO
    name: "",
    showName: false,
  },
];

export const sideHomeLinks: LinkType[] = [
  {
    src: "/assets/home.svg",
    width: 20,
    height: 20,
    alt: "Home Icon",
    href: "/", // TODO,
    name: "Home",
    showName: true,
  },
  {
    src: "/assets/profile.svg",
    width: 17,
    height: 17,
    alt: "Profile Icon",
    href: "/?active-side-nav=profile", // TODO,
    name: "Profile",
    showName: true,
  },
  {
    src: "/assets/message2.svg",
    width: 20,
    height: 20,
    alt: "Message Icon",
    href: "/?active-side-nav=message", // TODO,
    name: "Message",
    showName: true,
  },
  {
    src: "/assets/bookmark.svg",
    width: 15,
    height: 15,
    alt: "Bookmark Icon",
    href: "/?active-side-nav=bookmark", // TODO,
    name: "Bookmark",
    showName: true,
  },
  // {
  //   src: "/assets/explore.svg",
  //   width: 20,
  //   height: 20,
  //   alt: "Explore Icon",
  //   href: "/?active-side-nav=explore", // TODO,
  //   name: "Explore",
  //   showName: true,
  // },
  {
    src: "/assets/bell.svg",
    width: 19,
    height: 19,
    alt: "Notification Icon",
    href: "/?active-side-nav=notification", // TODO,
    name: "Notification",
    showName: true,
  },
];
