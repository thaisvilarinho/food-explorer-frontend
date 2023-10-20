import { SwiperSlide } from "swiper/react";

import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { meals, desserts, drinks } from "../../utils/lists";

import { Container, Content, Hero, Dishes } from "./styles";

export function Home() {
  const settings = {
    navigation: true,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
  return (
    <Container>
      <Header />
      <Content>
        <Hero>
          <img src="../../../public/hero.png" alt="Hero image" />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <Dishes>
          <Section title="Refeições">
            <Carousel>
              {meals.map((meal) => (
                <SwiperSlide key={String(meal.id)}>
                  <Card data={meal} />
                </SwiperSlide>
              ))}
            </Carousel>
          </Section>
        </Dishes>
      </Content>
    </Container>
  );
}
