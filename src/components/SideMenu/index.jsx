import { X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Footer } from "../Footer";
import { ButtonText } from "../ButtonText";
import { SearchBar } from "../SearchBar";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container, Title, Header } from "./styles";

export function SideMenu({ menuIsOpen, onCloseMenu, onSearch }) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  function handleNavigateNewDish() {
    navigate(`/newDish`);
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <ButtonText type="button" icon={X} onClick={onCloseMenu} />
          Menu
        </Title>
      </Header>

      <section>
        <SearchBar
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => {
            if (onSearch) {
              onSearch(e.target.value);
            }
          }}
        />

        {user.role === USER_ROLE.ADMIN && (
          <ButtonText title="Novo prato" onClick={handleNavigateNewDish} />
        )}

        <ButtonText title="Sair" onClick={signOut} />
      </section>

      <Footer />
    </Container>
  );
}
