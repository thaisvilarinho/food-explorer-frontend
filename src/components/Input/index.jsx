import { Container } from "./styles";

export function Input({ id, name, ...rest }){
  return (
    <Container>
      <label htmlFor={id}>{ name }</label>
      <input id={ id } {...rest} />
    </Container>
  )
}