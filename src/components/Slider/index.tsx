import { CarouselContainer, StyledSwiper } from "./styles";
import { SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { ServiceCard } from "../ServiceCard";
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint";
import "swiper/swiper-bundle.css";

export interface ServiceCardData {
  name: string;
  description: string;
  price: number;
  image: string;
  city: string;
}

interface SliderProps {
  slides: ServiceCardData[];
}

export function Slider({ slides }: SliderProps) {

  return (
    <CarouselContainer>
      <StyledSwiper
        modules={[Navigation, A11y, Autoplay]}
        navigation
        loop
        style={
          {
            // @ts-ignore
            "--swiper-navigation-size": "25px",
          } as any
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          [parseInt(DEVICE_BREAKPOINT.XS)]: {
            slidesPerView: 2,
            spaceBetween: 110,
          },
          [parseInt(DEVICE_BREAKPOINT.SM)]: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          [parseInt(DEVICE_BREAKPOINT.MD)]: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          [parseInt(DEVICE_BREAKPOINT.LG)]: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          [parseInt(DEVICE_BREAKPOINT.XL)]: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={uuidv4()}>
            <ServiceCard service={slide} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
}
