import styled from "styled-components";
import imageBg from "../../assets/images/caminito.jpg";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const HeroSectionContainer = styled.section`
  background-image: url(${imageBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;

  margin-bottom: 8rem;
  position: relative;

  > main {
    display: flex;
    flex-direction: column;
    gap: 3.7rem;

    color: ${({ theme }) => theme.white};
    width: 60rem;

    position: absolute;
    top: 40%;

    > h1 {
      font-family: "Montserrat", sans-serif;
      font-size: 8rem;
      font-weight: 600;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }

    > p {
      font-family: "Poppins", system-ui;
      font-size: 1.8rem;
      font-weight: 700;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    > main {
      gap: 2rem;

      > h1 {
        font-size: clamp(5rem, 15vw, 7rem);
      }

      > p {
        font-size: clamp(1.3rem, 15vw, 1.8rem);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > main {
      gap: 2rem;

      > h1 {
        font-size: clamp(4rem, 15vw, 6rem);
      }

      > p {
        font-size: clamp(1rem, 15vw, 1.5rem);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    > main {
      gap: 2rem;
      width: 100%;

      > h1 {
        font-size: clamp(3rem, 15vw, 3.5rem);
      }

      > p {
        font-size: clamp(1rem, 15vw, 1.2rem);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    > main {
      > h1,
      p {
        text-align: center;
      }
    }
  }
`;
