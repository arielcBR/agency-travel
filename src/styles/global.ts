import { createGlobalStyle } from "styled-components";

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

  .container {
    padding: 0 12.5%;
  }
`;
