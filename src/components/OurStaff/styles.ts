import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const OurStaffContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  margin-bottom: 6rem;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  align-self: flex-end;

  text-align: justify;
  width: 50%;

  > h4 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    white-space: nowrap;
  }

  > p {
    font-size: 1.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > p {
      font-size: 1.5rem;
    }

    > h4 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    width: 100%;
  }
`;

export const Staff = styled.div`
  display: grid;
  grid-template-columns: 45% 25% 25%;
  column-gap: 2.5rem;

  overflow-x: hidden;
  height: 39rem;
  max-width: 100%;
  width: 100%;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      grid-template-columns: 35% 30% 32.5%;
      column-gap: 1rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 1.5rem;

    height: auto;
  }
`;


export const StafCardfWithDescription = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 0;

  border-radius: 10px;
  overflow: hidden;
  min-height: 28rem;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    & {
      grid-template-columns: 40% 60%;
    }
  }
`;

interface CardImageProps {
  image: string;
}

export const CardImage = styled.div<CardImageProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20rem;
  width: 100%;
`;

export const CardDescription = styled.div`
  background-color: ${({ theme }) => theme["brown-200"]};
  padding: 1.9rem 1rem;
  text-align: justify;
  height: 100%;
  width: 100%;

  > h4 {
    color: ${({ theme }) => theme.white};
    font-family: Montserrat, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  > p {
    color: ${({ theme }) => theme.white};
    font-family: Poppins, sans-serif;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    text-align: justify;

    > span {
      font-weight: 500;
    }
  }
`;

export const StaffCardSimple = styled(CardImage)`
  border-radius: 10px;
  position: relative;
  height: 100%;
  width: 100%;

  > span {
    position: absolute;
    left: 50%;
    bottom: 2.5rem;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.white};
    font-family: Montserrat, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
    white-space: nowrap;
    z-index: 10;
  }

  
`;
