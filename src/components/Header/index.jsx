import { MagnifyingGlass, SignOut } from "@phosphor-icons/react";

import FoodExplorerLogo from "../../assets/foodExplorerLogo.svg";

import { Button } from "../Button";

import { Container, Logo, Search, ButtonsWrapper, ButtonIcon } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <svg
          width="43"
          height="48"
          viewBox="0 0 43 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z"
          />
        </svg>
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
        <Button title="Novo prato" className="teste" />

        <ButtonIcon type="button">
          <SignOut />
        </ButtonIcon>
      </ButtonsWrapper>
    </Container>
  );
}
