import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme["brown-200"]};
  color: ${({ theme }) => theme.white};
  font-family: Poppins, sans-serif;
  padding-top: 5rem;
  padding-bottom: 2rem;
  width: 100%;

  .isVisible {
    display: flex;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > p a {
      font-size: 1.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    padding-bottom: 6rem;

    .isVisible {
      display: none;
    }
  }
`;

export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 8rem;
  justify-content: space-between;

  margin-bottom: 1rem;

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    grid-template-columns: 2fr auto 1.5fr;
    grid-column-gap: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 1.5rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  > span {
    font-family: Montserrat, sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      align-self: center;
  }
`;

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  color: ${({ theme }) => theme.white};
  text-align: justify;

  > p {
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    gap: 1rem;

    > p {
      text-align: justify;
    }
  }
`;

export const FooterBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  color: ${({ theme }) => theme.white};
  text-align: start;

  > span {
    font-family: Montserrat, sans-serif;
    font-size: 1.7rem;
    font-weight: 600;
  }

  > ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.8rem;

    > li {
      > a {
        color: ${({ theme }) => theme.white};
        font-family: Poppins, sans-serif;
        text-decoration: none;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      margin-bottom: 2rem;
    }
    > span,
    li {
      align-self: center;
  }
`;

export const FooterPolicies = styled(FooterBase)`
  display: flex;
  flex-direction: column;

`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;

  margin-bottom: 2rem;

  > span {
    color: ${({ theme }) => theme.white};
    font-family: Montserrat, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > a svg {
    fill: ${({ theme }) => theme.white};
    height: 2.5rem;
    width: 2.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      align-self: center;
  }
`;

export const FooterBottom = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding-top: 2rem;

  > p {
    border-top: 1px solid ${({ theme }) => theme.white};
    padding-top: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.white};
  }
`;
