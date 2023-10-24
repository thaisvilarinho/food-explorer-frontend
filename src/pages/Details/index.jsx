import { useEffect, useState } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { useParams, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { OrderQuantityButtons } from "../../components/OrderQuantityButtons";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import Logo from "../../assets/foodExplorerLogo.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { USER_ROLE } from "../../utils/roles";

import { Container, Content, Dish, Description, Ingredients } from "./styles";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  function handleNavigateEditDish() {
    navigate(`/dish/${data.id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`, {
        withCredentials: true,
      });
      const { image, price, ...rest } = response.data;

      const imageURL = image ? `${api.defaults.baseURL}/files/${image}` : Logo;

      setData({
        ...rest,
        image: imageURL,
        price: price.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      });
    }

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          className="buttonText"
          icon={CaretLeft}
          title="voltar"
          onClick={handleBack}
        />

        {data && (
          <Dish>
            <img src={data.image} alt={`Imagem do prato selecionado`} />

            <Description>
              <h2>{data.name}</h2>
              <p>{data.description}</p>

              <Ingredients>
                {data.ingredients.map((ingredient, index) => (
                  <span key={ingredient + index}>{ingredient}</span>
                ))}
              </Ingredients>

              {user.role === USER_ROLE.ADMIN && (
                <div className="editButtonWrapper">
                  <Button
                    title="Editar prato"
                    onClick={handleNavigateEditDish}
                  />
                </div>
              )}
              {user.role === USER_ROLE.CUSTOMER && (
                <OrderQuantityButtons price={data.price} />
              )}
            </Description>
          </Dish>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
