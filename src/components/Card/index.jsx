import { PencilSimple } from "@phosphor-icons/react";

import { Container, Description } from "./styles";

export function Card({ data, ...rest}){
  return (
    <Container {...rest}>
      <small>
        <PencilSimple/>
      </small>

      <img src={data.img} alt={`Imagem de ${data.title}`} />

      <Description>
        <h3>{data.title}</h3>
        <span>{data.description}</span>

        <p>{data.price}</p>
      </Description>


    </Container>
  )
}