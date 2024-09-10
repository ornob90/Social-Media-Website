import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";

export interface FollowBtnProps extends ButtonProps {
  className?: string;
}

const FollowBtn = ({ className }: FollowBtnProps) => {
  return (
    <Button
      size="sm"
      className={`rounded-lg text-black bg-light-gray px-4 py-2 text-sm ${className}`}
    >
      Follow
    </Button>
  );
};

export default FollowBtn;
