import { Container } from "./style";

export function TextArea({ id, name, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{ name }</label>
      <textarea id={ id } {...rest}></textarea>
    </Container>
  );
}
