import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINT } from "./devicesBreakpoint";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    background-color: ${({ theme }) => theme["white"]};
    font-size: 62.5%;
  }

  html {
   /* overflow-x: hidden;  */
  }

  :focus {
    outline: 0;
  }

  body {
    color: ${({ theme }) => theme["gray"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font: 400 1.6rem Poppins, sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

  .container {
    padding: 0 12.5%;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    .container {
    padding: 0 5%;
  }
  }
`;
