import { CaretLeft } from "@phosphor-icons/react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";

import { Container, Content, Dish, Description, Ingredients } from "./styles";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={CaretLeft} title="voltar" />

        <Dish>
          <img src="/meal1.png" alt={`Imagem do prato selecionado`} />

          <Description>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <Ingredients>
              <span>alface</span>
              <span>cebola</span>
              <span>pão naan</span>
              <span>pepino</span>
              <span>rabanete</span>
              <span>tomate</span>
            </Ingredients>

            <div>
              <Button title="Editar prato" />
            </div>
          </Description>
        </Dish>
      </Content>
      <Footer />
    </Container>
  );
}
