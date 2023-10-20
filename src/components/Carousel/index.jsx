import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

import { Container, Overlay } from "./styles";

export function Carousel({ children }) {
  return (
    <Container>

      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={27}
        slidesPerView={4}
        navigation
        loop
        scrollbar={{ draggable: true }}
      >
      <Overlay className="left" />
        {children}
      <Overlay className="right" />
      </Swiper>
    </Container>
  );
}
