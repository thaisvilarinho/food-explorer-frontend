import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";

import FoodExplorerLogo from "../../assets/foodExplorerLogo.svg";

import { Button } from "../Button";

import { Container, Logo, Search, ButtonsWrapper, ButtonIcon } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <img
          src={FoodExplorerLogo}
          alt="Logotipo do restaurante fictício Food Explore apresenta um distintivo losango na tonalidade de azul-escuro"
        />
        <div>
          <h1>food explorer</h1>
          <span>admin</span>
        </div>
      </Logo>

      <Search>
        <MagnifyingGlass />
        <input name="search" placeholder="Busque por pratos ou ingredientes" />
      </Search>

      <ButtonsWrapper>
        <Button title="Novo prato" />

        <ButtonIcon type="button">
          <SignOut />
        </ButtonIcon>
      </ButtonsWrapper>
    </Container>
  );
}
