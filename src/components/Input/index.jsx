import { Container } from "./styles";

export function Input({ id, label, lighterBackgroundColor=false, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <div data-lighter-background={lighterBackgroundColor}>
        <input id={id} {...rest} />
      </div>
    </Container>
  )
}