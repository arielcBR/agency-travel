import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.3s ease-in-out;
    z-index: 500;
  }

  .swiper-slide {
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    margin: 0 auto; 
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
`;
