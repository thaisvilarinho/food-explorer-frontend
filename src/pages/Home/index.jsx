import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Carousel } from "../../components/Carousel";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { DISH_CATEGORY } from "../../utils/categories";

import { api } from "../../services/api";

import { Container, Content, Hero, Dishes } from "./styles";

export function Home() {
  const [dishes, setDishes] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`, {
        withCredentials: true,
      });
      const meals = response.data.filter(
        (dish) => dish.category === DISH_CATEGORY.MEAL
      );
      const desserts = response.data.filter(
        (dish) => dish.category === DISH_CATEGORY.DESSERT
      );
      const drinks = response.data.filter(
        (dish) => dish.category === DISH_CATEGORY.DRINK
      );
      setDishes({
        meals,
        desserts,
        drinks,
      });
    }

    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Header onSearch={setSearch} />
      <Content>
        <Hero>
          <img
            src="/hero.png"
            alt="Biscoitos recheados com frutinhas vermelhas e um cenário de folhas caindo ao seu redor, em tons vibrantes e coloridos."
          />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <Dishes>
          {dishes.meals?.length > 0 && (
            <Section title="Refeições">
              <Carousel itemsTotal={dishes.meals.length}>
                {dishes.meals.map((meal) => (
                  <SwiperSlide key={String(meal.id)}>
                    <Card data={meal} />
                  </SwiperSlide>
                ))}
              </Carousel>
            </Section>
          )}

          {dishes.desserts?.length > 0 && (
            <Section title="Sobremesas">
              <Carousel itemsTotal={dishes.desserts.length}>
                {dishes.desserts.map((dessert) => (
                  <SwiperSlide key={String(dessert.id)}>
                    <Card data={dessert} />
                  </SwiperSlide>
                ))}
              </Carousel>
            </Section>
          )}

          {dishes.drinks?.length > 0 && (
            <Section title="Bebidas">
              <Carousel itemsTotal={dishes.drinks.length}>
                {dishes.drinks.map((drink) => (
                  <SwiperSlide key={String(drink.id)}>
                    <Card data={drink} />
                  </SwiperSlide>
                ))}
              </Carousel>
            </Section>
          )}
        </Dishes>
      </Content>
      <Footer />
    </Container>
  );
}
