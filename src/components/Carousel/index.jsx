import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import { Card } from "../../components/Card";

import { Container, Slider, Overlay } from "./styles";

export function Carousel({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container>
      <h2>{title}</h2>

      <Overlay className="left" onClick={prevSlide}>
        <button className="previous">
          <CaretLeft />
        </button>
      </Overlay>
      <Slider
        style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}
      >
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Slider>
      <Overlay className="right" onClick={nextSlide}>
        <button className="next">
          <CaretRight />
        </button>
      </Overlay>
    </Container>
  );
}
