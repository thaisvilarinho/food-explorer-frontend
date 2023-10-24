import { useState } from "react";
import { SignOut, Receipt, List } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { SearchBar } from "../SearchBar";
import { SideMenu } from "../SideMenu";

import { useAuth } from "../../hooks/auth";
import { useOrder } from "../../hooks/order";
import { USER_ROLE } from "../../utils/roles";

import { Container, Logo, ButtonsWrapper, ButtonIcon } from "./styles";

export function Header({ onSearch }) {
  const { totalItemsOrder } = useOrder();

  const navigate = useNavigate();
  const { signOut, user } = useAuth();
  const [menuIsOpen, setIsMenuOpen] = useState(false);

  function handleNavigationNewDish() {
    navigate(`/newdish`);
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setIsMenuOpen(false)}
        onSearch={onSearch}
      />
      <ButtonIcon
        className="showOnlyOnSmallSizeScreen"
        type="button"
        onClick={() => setIsMenuOpen(true)}
      >
        <List />
      </ButtonIcon>
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
          <span className="showOnlyOnBigSizeScreen">{user.role}</span>
        </div>
      </Logo>

      <SearchBar
        className="showOnlyOnBigSizeScreen"
        placeholder="Busque por pratos ou ingredientes"
        onChange={(e) => {
          if (onSearch) {
            onSearch(e.target.value);
          }
        }}
      />

      <ButtonsWrapper>
        {user.role === USER_ROLE.ADMIN && (
          <Button
            className="showOnlyOnBigSizeScreen"
            title="Novo prato"
            onClick={handleNavigationNewDish}
          />
        )}
        {user.role === USER_ROLE.CUSTOMER && (
          <>
            <Button
              className="showOnlyOnBigSizeScreen"
              icon={Receipt}
              title={`Pedidos(${totalItemsOrder})`}
            />
            <ButtonIcon type="button" className="showOnlyOnSmallSizeScreen">
              <Receipt />
              <div className="orderTotal">
                <small>{totalItemsOrder}</small>
              </div>
            </ButtonIcon>
          </>
        )}

        <ButtonIcon
          className="showOnlyOnBigSizeScreen"
          type="button"
          onClick={signOut}
        >
          <SignOut />
        </ButtonIcon>
      </ButtonsWrapper>
    </Container>
  );
}
