import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme["blue-100"]};
  font-family: Poppins, sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme["blue-200"]};
    transform: scale(1.025);
  }
`;
