import React from "react";
import { InputWrapper, InputStyled } from "./styles";

export function Input({
  placeholder,
  name,
  type = "text",
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const id = name;

  return (
    <InputWrapper>
      <InputStyled
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        {...rest}
      />
    </InputWrapper>
  );
}
