import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import { useOrder } from "../../hooks/order";

import { Container } from "./styles";

export function OrderQuantityButtons({ price }) {
  const { totalItemsOrder, setTotalItemsOrder } = useOrder();

  const [quantity, setQuantity] = useState(1);

  const totalFormatted = price ? (quantity * parseFloat(price))
  .toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) : null;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInclude = () => {
    setTotalItemsOrder(totalItemsOrder + quantity);
    alert("Pedido atualizado");
  }


  return (
    <Container>
      <ButtonText icon={Plus} onClick={handleIncrease} />
      <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
      <ButtonText icon={Minus} onClick={handleDecrease} />
      <div className="includeButtonWrapper" data-big-size={!!price}>
        <Button 
            title={!!price ? `incluir ∙ R$ ${totalFormatted}` : 'incluir'} 
            onClick={handleInclude}
          />
      </div>
    </Container>
  );
}
