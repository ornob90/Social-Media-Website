import { ChangeEvent, MouseEventHandler } from "react";

export type InputType = {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

export type TextAreaType = {
  className?: string;
  children?: React.ReactNode;
};
