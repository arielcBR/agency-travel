import { ButtonContainer } from "./styles";
import { LinkProps } from "react-router-dom";

interface ButtonProps extends LinkProps {
  text: string;
}

export function Button({ text, to="#", ...rest }: ButtonProps) {
  return (
    <ButtonContainer to={to} {...rest}>
      {text}
    </ButtonContainer>
  );
}
