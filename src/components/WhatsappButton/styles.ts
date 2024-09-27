import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const WhatsappButtonContainer = styled.a`
  transition: 2s ease-in-out;
  z-index: 100;
`;

export const DesktopButton = styled.img`
  display: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 2rem;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  height: 9rem;
  width: 9rem;

  > img {
    height: 7rem;
    width: 7rem;
  }

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    > img {
      height: 6rem;
      width: 6rem;
    }
  }
`;

export const MobileButton = styled.div`
  display: none;
  padding: 1rem;
  background-color: #25d366;
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  padding: 1rem 0;
  text-align: center;
  text-transform: capitalize;
  
  cursor: pointer;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  z-index: 1000;

  :hover {
    background-color: #128c7e; 
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: block;
  }
`;
