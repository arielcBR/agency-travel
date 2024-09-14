import { CustomLinkContainer } from "./styles"
import { LinkProps } from "react-router-dom"

interface CustomLinkProps extends LinkProps {
  text: string;
}

export function CustomLink({ text, to="#", ...rest }: CustomLinkProps) {
  return <CustomLinkContainer to={to} {...rest}>{text}</CustomLinkContainer>;
}
