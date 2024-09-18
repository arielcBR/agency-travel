import styled from "styled-components";
import { FooterBase } from "../../styles";

export const FooterContactContainer = styled(FooterBase)``;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.white};
  font-family: Poppins, sans-serif;

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.white};
    border-radius: 10px;
    height: 3.6rem;
    width: 3.6rem;

    > svg {
      height: 2rem;
      width: 2rem;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > p:nth-child(1) {
      color: ${({ theme }) => theme["gray-400"]};
      font-size: 1.3rem;
      font-weight: 400;
    }

    > p:nth-child(2) {
      color: ${({ theme }) => theme.white};
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;