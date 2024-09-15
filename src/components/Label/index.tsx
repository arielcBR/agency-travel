import React from "react"
import { LabelContainer } from "./styles"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  htmlFor: string;
}

export function Label({ text, htmlFor }: LabelProps) {
  return <LabelContainer htmlFor={htmlFor}>{text}</LabelContainer>;
}
