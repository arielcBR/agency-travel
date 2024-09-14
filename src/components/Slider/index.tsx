import {
  CarouselContainer,
  StyledSwiper,
} from "./styles"
import { SwiperSlide } from "swiper/react"
import { v4 as uuidv4 } from "uuid";
import { Pagination, Navigation, A11y } from "swiper/modules"
import { ServiceCard } from "../ServiceCard"
import { DEVICE_BREAKPOINT } from "../../styles/devicesBreakpoint"
import "swiper/swiper-bundle.css";

export interface ServiceCardData {
    name: string;
    description: string;
    price: number;
    image: string;
    city: string;
}

interface SliderProps {
    slides: ServiceCardData[]
}

export function Slider({ slides }: SliderProps) {
  return (
    <CarouselContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, A11y]}
        pagination={{ clickable: true }}
        navigation
        loop
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
            spaceBetween: 100,
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
