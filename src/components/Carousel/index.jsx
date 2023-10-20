import { useEffect, useState } from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

import { Container } from "./styles";

export function Carousel({ itemsTotal, children }) {
  const slidesPerView = 3.5;
  const totalSlides = Math.floor(itemsTotal / slidesPerView);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const initialIndex = 0;
    setCurrentIndex(initialIndex);
  }, []);

  return (
    <Container>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={27}
        slidesPerView={slidesPerView}
        navigation
        loop={itemsTotal >= slidesPerView * 2}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSlideChange}
        className={currentIndex === 0 ? "first-slide" : currentIndex === totalSlides && "last-slide"}
      >
        {children}
      </Swiper>
    </Container>
  );
}
