"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export interface CommentDropdownInterface {
  onChange: (value: string) => void;
}

const CommentDropdown = ({ onChange }: CommentDropdownInterface) => {
  // constants
  const actionsMenu = [
    {
      label: "Edit Comment",
      value: "edit",
      description: "Edit your comment",
      icon: <AiOutlineEdit className="text-[22px]" />,
      baseClassName: "",
      title: "font-medium",
    },
  ];

  const dangerZoneMenu = [
    {
      label: "Delete Comment",
      value: "delete",
      description: "Delete your comment",
      icon: <MdOutlineDelete className="text-[22px] text-red-500" />,
      title: "text-red-500 font-medium",
    },
  ];

  // states

  // redux hooks

  // session hooks

  // package hooks

  // custom hooks

  // functions

  // effects

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="bg-transparent !p-0 ">
          <BsThreeDots
            onClick={(e) => e.stopPropagation()}
            className="text-xl cursor-pointer "
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icon">
        <DropdownSection title={"Actions"}>
          {actionsMenu.map((menu) => (
            <DropdownItem
              onClick={() => onChange(menu.value)}
              key={menu.value}
              description={menu.description}
              startContent={menu.icon}
              className="!gap-x-3"
              classNames={{
                title: menu.title,
              }}
            >
              {menu.label}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection title={"Danger"}>
          {dangerZoneMenu.map((menu) => (
            <DropdownItem
              onClick={() => onChange(menu.value)}
              key={menu.value}
              description={menu.description}
              startContent={menu.icon}
              className="!gap-x-3"
              classNames={{
                title: menu.title,
              }}
            >
              {menu.label}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommentDropdown;
