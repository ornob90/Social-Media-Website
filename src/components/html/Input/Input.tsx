import { InputType } from "@/types/html.types";

const Input = ({
  type = "text",
  placeholder,
  className,
  onChange,
  onClick,
}: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus:outline-none bg-white ${className}`}
      onClick={onClick}
      onChange={onChange}
    />
  );
};

export default Input;
