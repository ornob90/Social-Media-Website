import React from "react";

const Button = ({
  className,
  children,
  disabled,
  type = "submit",
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type={type}
      className={` focus:scale-95 duration-300  ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
