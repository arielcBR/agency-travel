import styled from "styled-components";
import { FooterBase } from "../../styles";
import { DEVICE_BREAKPOINT } from "../../../../styles/devicesBreakpoint";

export const FooterContactContainer = styled(FooterBase)`
> div {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;
}

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    div {
      align-self: flex-start;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.white};
  font-family: Poppins, sans-serif;
  > div {
    width: fit;
  }

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

    white-space: nowrap;

    > p:nth-child(1) {
      color: ${({ theme }) => theme["gray-400"]};
      font-size: 1.3rem;
      font-weight: 400;
    }

    > a {
      color: ${({ theme }) => theme.white};
      font-size: 1.5rem;
      font-weight: 500;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    > span {
      align-self: center;
    }
  }
`;