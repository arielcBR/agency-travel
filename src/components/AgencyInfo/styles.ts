import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const AgencyInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  margin-bottom: 5rem;
  width: 100%;

  > h4 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 60rem;
    grid-template-rows: 100%;
    column-gap: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    > div {
      grid-template-columns: 1fr 40rem;
    }
  }
`;

export const BenefitsWrapper = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;

  > img {
    border-radius: 20px;
    height: 25rem;
    width: 35rem;
  }

  > img:first-of-type {
    align-self: flex-end;
  }

  > img:last-of-type {
    align-self: flex-start;

    border: 4px solid ${({ theme }) => theme.white};
    margin-top: -5rem;
    z-index: 10;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    > img {
      border-radius: 15px;
      height: 20rem;
      width: 28rem;
    }

    > img:last-of-type {
      margin-top: -3rem;
    }
  }
`;
