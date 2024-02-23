import { InputType } from "@/types/html.types";

const Input = ({
  type = "text",
  placeholder,
  className,
  onChange,
  onClick,
  required,
}: InputType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus:outline-none  ${className}`}
      onClick={onClick}
      onChange={onChange}
      required={required ? true : false}
    />
  );
};

export default Input;
