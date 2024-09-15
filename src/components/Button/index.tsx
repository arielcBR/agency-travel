import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{text}</ButtonContainer>;
}
