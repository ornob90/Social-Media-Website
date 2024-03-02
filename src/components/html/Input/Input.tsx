import { InputType } from "@/types/html.types";

const Input = ({
  type = "text",
  name,
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
      name={name}
      onClick={onClick}
      onChange={onChange}
      required={required ? true : false}
    />
  );
};

export default Input;
