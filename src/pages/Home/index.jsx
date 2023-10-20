import { SwiperSlide } from "swiper/react";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { meals, desserts, drinks } from "../../utils/lists";

import { Container, Content, Hero, Dishes } from "./styles";

export function Home() {

  return (
    <Container>
      <Header />
      <Content>
        <Hero>
          <img src="/hero.png" alt="Hero image" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <Dishes>
          <Section title="Refeições">
            <Carousel itemsTotal={meals.length}>
              {meals.map((meal) => (
                <SwiperSlide key={String(meal.id)}>
                  <Card data={meal} />
                </SwiperSlide>
              ))}
            </Carousel>
          </Section>

          <Section title="Sobremesas">
            <Carousel itemsTotal={desserts.length}>
              {desserts.map((dessert) => (
                <SwiperSlide key={String(dessert.id)}>
                  <Card data={dessert} />
                </SwiperSlide>
              ))}
            </Carousel>
          </Section>

          <Section title="Bebidas">
            <Carousel itemsTotal={drinks.length}>
              {drinks.map((drink) => (
                <SwiperSlide key={String(drink.id)}>
                  <Card data={drink} />
                </SwiperSlide>
              ))}
            </Carousel>
          </Section>
        </Dishes>
      </Content>
      <Footer />
    </Container>
  );
}
