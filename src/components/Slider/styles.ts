import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  --swiper-navigation-size: 25px;

  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.3s ease-in-out;
    z-index: 500;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
`;
