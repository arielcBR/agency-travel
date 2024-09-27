import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    .hide {
      display: none;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    .hide {
      display: inline;
    }
  }
`;

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  margin-bottom: 2rem;
  text-align: justify;
  width: 65%;

  > h3 {
    color: ${({ theme }) => theme.black};
    font-family: Montserrat, sans-serif;
    font-size: 3rem;
    font-weight: 600;
  }

  > p {
    color: ${({ theme }) => theme["gray-200"]};
    font-family: Poppins, sans-serif;
    font-size: 1.7rem;

    > span {
      font-style: italic;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > h3 {
      font-size: 2.5rem;
    }

    > p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    width: 100%;

    > h3 {
      text-align: center;
    }
  }
`;

export const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(0, 1fr)
  ); 
  gap: 0.25rem;
  align-items: center; 

  width: 100%; 
  overflow: hidden;

  > img {
    border-radius: 5px;
    box-sizing: border-box;
    height: 25rem;
    object-fit: cover;
    object-position: center;
    width: 100%; 
  }

  > img:nth-of-type(3) {
    height: 30rem; 
  }
`;
