import { Container } from "./style";

export function TextArea({ id, name, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{ name }</label>
      <textarea id={ id } {...rest}>{ value }</textarea>
    </Container>
  );
}
