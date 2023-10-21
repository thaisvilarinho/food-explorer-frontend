import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useState } from "react";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import {
  Container,
  Content,
  Form,
  ImageWrapper,
  Category,
  Ingredients,
} from "./styles";

export function Dish() {
  const [category, setCategory] = useState("default");

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={CaretLeft} title="voltar" />

        <Form>
          <fieldset>
            <legend>Adicionar prato</legend>

            <section className="horizontalWrapper">
              <ImageWrapper>
                <span className="legend">Imagem do prato</span>

                <label htmlFor="imagem">
                  <UploadSimple />
                  Selecione imagem
                </label>
                <input
                  type="file"
                  id="imagem"
                  name="image"
                  accept="image/*"
                  placeholder="Selecione imagem"
                />
              </ImageWrapper>
              <Input id="name" name="Nome" placeholder="Ex.: Salada Ceasar" />

              <Category>
                <label htmlFor="category" className="legend">
                  Categoria
                </label>

                <select
                  id="category"
                  data-category-default={category === "default"}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="default" disabled>
                    Selecione a categoria
                  </option>
                  <option value="meal">Refeições</option>
                  <option value="dessert">Sobremesas</option>
                  <option value="drink">Bebidas</option>
                </select>
              </Category>
            </section>

            <section>
              <span className="legend">Ingredientes</span>
              <Ingredients>
                <Note value="Pão Naan" />
                <Note isNew placeholder="Adicionar" />
              </Ingredients>
            </section>
            
            <TextArea
              id="description"
              name="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </fieldset>

          <div className="button-wrapper">
            <Button title="Salvar alterações" darkColor={false} />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
