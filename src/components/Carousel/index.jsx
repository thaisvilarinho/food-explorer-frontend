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
        navigation
        scrollbar={{ draggable: true, hide: true }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: 27 ,
            loop: itemsTotal >= slidesPerView * 2
          },
        }}
        className={currentIndex === 0 ? "first-slide" : currentIndex === totalSlides && "last-slide"}
      >
        {children}
      </Swiper>
    </Container>
  );
}
