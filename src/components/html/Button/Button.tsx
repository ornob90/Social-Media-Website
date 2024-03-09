import React from "react";

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button className={` focus:scale-95 duration-300  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
