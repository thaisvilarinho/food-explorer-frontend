import { PencilSimple, HeartStraight } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { OrderQuantityButtons } from "../OrderQuantityButtons";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";

import Logo from "../../assets/foodExplorerLogo.svg";

import { Container, Content, Description } from "./styles";

export function Card({ data, ...rest }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const imageURL = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : Logo;

  const priceFormatted = data.price?.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function handleNavigateEditDish() {
    navigate(`/dish/${data.id}`);
  }

  return (
    <Container {...rest}>
      {user.role === USER_ROLE.ADMIN && (
        <button onClick={handleNavigateEditDish}>
          <PencilSimple />
        </button>
      )}
      {user.role === USER_ROLE.CUSTOMER && (
        <button>
          <HeartStraight />
        </button>
      )}

      <Content to={`/details/${data.id}`}>
        <img src={imageURL} alt={`Imagem de ${data.name}`} />

        <Description>
          <h3>{data.name + " >"}</h3>
          <span>{data.description}</span>

          <p>R$ {priceFormatted}</p>
        </Description>
      </Content>
      {user.role === USER_ROLE.CUSTOMER && (
        <OrderQuantityButtons />
      )}
    </Container>
  );
}
