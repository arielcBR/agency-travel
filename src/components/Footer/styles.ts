import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme["brown-200"]};
  color: ${({ theme }) => theme.white};
  font-family: Poppins, sans-serif;
  padding-top: 5rem;
  padding-bottom: 2rem;
  width: 100%;
`;

export const FooterBody = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 8rem;
  justify-content: space-between;

  margin-bottom: 3rem;

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    grid-template-columns: 2.25fr 1fr 1fr 1.5fr;
    grid-column-gap: 2.5rem;
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
`;

export const FooterDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  color: ${({ theme }) => theme.white};
  text-align: start;

  > p {
    margin-bottom: 2.5rem;
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
`;

export const FooterMap = styled(FooterBase)``;

export const FooterPolicies = styled(FooterBase)``;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;

  margin-bottom: 1rem;

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
