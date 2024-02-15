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
    src: "/assets/message.svg",
    width: 25,
    height: 25,
    alt: "Feed Icon",
    href: "/", // TODO,
    name: "Feed",
    showName: true,
  },
  {
    src: "/assets/message.svg",
    width: 25,
    height: 25,
    alt: "Friends Icon",
    href: "/?active-side-nav=friends", // TODO,
    name: "Friends",
    showName: true,
  },
  {
    src: "/assets/message.svg",
    width: 25,
    height: 25,
    alt: "Group Icon",
    href: "/?active-side-nav=group", // TODO,
    name: "Group",
    showName: true,
  },
];
