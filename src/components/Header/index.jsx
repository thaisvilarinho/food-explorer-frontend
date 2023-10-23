import { MagnifyingGlass, SignOut, Receipt } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, Logo, Search, ButtonsWrapper, ButtonIcon } from "./styles";

export function Header({ onSearch }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  function handleNavigationNewDish() {
    navigate(`/newdish`);
  }

  return (
    <Container>
      <Logo to="/">
        <svg
          width="43"
          height="48"
          viewBox="0 0 43 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" />
        </svg>
        <div>
          <h1>food explorer</h1>
          <span>{user.role}</span>
        </div>
      </Logo>

      <Search>
        <MagnifyingGlass />
        <input
          label="search"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            if (onSearch) {
              onSearch(e.target.value);
            }
          }}
        />
      </Search>

      <ButtonsWrapper>
        {user.role === USER_ROLE.ADMIN && (
          <Button title="Novo prato" onClick={handleNavigationNewDish} />
        )}
        {user.role === USER_ROLE.CUSTOMER && (
          <Button icon={Receipt} title="Pedidos(0)" />
        )}

        <ButtonIcon type="button" onClick={signOut}>
          <SignOut />
        </ButtonIcon>
      </ButtonsWrapper>
    </Container>
  );
}
