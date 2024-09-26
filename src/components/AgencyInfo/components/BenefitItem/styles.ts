import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../../../styles/devicesBreakpoint";

export const BenefitItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2.5rem;

  > div {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme["brown-200"]};
    border-radius: 15px;
    margin-bottom: 0.75rem;
    padding: 0.5rem 0.5rem;
    height: 3rem;
    width: 6.5rem;

    > svg {
      background-color: ${({ theme }) => theme.white};
      border-radius: 50%;
      fill: ${({ theme }) => theme["yellow-100"]};
      padding: 0.25rem;
      height: 2rem;
      width: 2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    > div {
      height: 3rem;
      width: 5.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > div {
      height: 2.4rem;
      width: 4.4rem;
    }

    > svg {
      padding: 0.2rem;
      height: 1.6rem;
      width: 1.6rem;
    }
  }
`;

export const BenefitTitle = styled.h4`
  color: ${({ theme }) => theme.black};
  font-family: Montserrat, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.3rem;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
      font-size: 1.5rem;
  }
`;

export const BenefitDescription = styled.p`
  color: ${({ theme }) => theme["gray-200"]};
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  text-align: justify;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
      font-size: 1.25rem;
  }
`;
