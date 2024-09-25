import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const OurServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  > h3 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      h3 {
        font-size: 2.5rem;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  text-align: justify;

  > .servicesContent {
    display: flex;
    flex-direction: column;
    gap: 6.8rem;
    flex: 1;

    height: 100%;
  }

  > div div {
    > h4 {
      margin-bottom: 1rem;
    }

    > ul {
      > li {
        display: flex;
        align-items: center;
        gap: 1rem;

        margin-bottom: 0.5rem;

        > svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > div div ul {
      > h4 {
        font-size: 1.5rem;
      }
    }

    > div div ul {
      font-size: 1.3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    & {
      flex-direction: column;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  color: #373737;
  font-family: Poppins, sans-serif;
  font-size: 1.7rem;
  width: 60%;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      gap: 2rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    width: 100%;
  }
`;
export const Carrousel = styled.div`
  > h3 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > h3 {
      font-size: 2.5rem;
    }
  }
`;
