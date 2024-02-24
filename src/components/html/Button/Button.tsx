import React from "react";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button className={`  ${className || "bg-primary text-white"}`}>
      {children}
    </button>
  );
};

export default Button;
