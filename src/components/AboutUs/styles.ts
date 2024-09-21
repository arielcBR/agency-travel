import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const AboutUsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7.5rem;

  margin-bottom: 8rem;

  > img {
    border-radius: 10px;
    width: 40%;
    height: 80%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    > h3 {
      color: ${({ theme }) => theme.black};
      font-family: "Montserrat", sans-serif;
      font-size: 3.5rem;
      font-weight: 600;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      > p {
        color: ${({ theme }) => theme["gray-200"]};
        font-family: "Poppins", sans-serif;
        font-size: 1.7rem;
        text-align: justify;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
    gap: 4rem;

    > img {
      border-radius: 10px;
      width: 50%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    gap: 2.5rem;

    > div {
      h3 {
        font-size: 2.5rem;
      }
    }

    > div div {
      > p {
        font-size: 1.5rem;
      }
    }
  }
`;
