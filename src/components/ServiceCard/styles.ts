import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 5rem;
  height: 40rem;
  min-width: 18rem;
  max-width: 24rem;
  width: 80vw;

  @media (max-width: ${DEVICE_BREAKPOINT.XL}) {
      height: 35rem;
  }
`;

interface ImageHeaderProps {
  imageSrc: string;
}

export const ImageHeader = styled.div<ImageHeaderProps>`
  background-image: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0px 0px;

  height: 75%;
  width: 100%;
`;

export const ServiceBody = styled.div`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 2px solid rgba(209, 209, 209, 0.75);
  padding: 2rem 2.8rem 1rem 2rem;
  width: 100%;

  color: ${({ theme }) => theme.black};
  font-family: Poppins, sans-serif;
  font-weight: 500;

  h4 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme["gray-000"]};
    font-size: 1.2rem;

    > p strong {
      color: ${({ theme }) => theme["black-100"]};
    }

    > a {
      color: ${({ theme }) => theme["blue-100"]};
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > h4 {
      font-size: 1.5rem;
    }
  }
`;
