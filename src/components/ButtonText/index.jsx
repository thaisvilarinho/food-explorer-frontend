import { Container } from "./styles";

export function ButtonText({ icon: Icon, title, applyBold = false, ...rest }){
  return (
    <Container {...rest}>
      {Icon && (<Icon size={32} />)}
      {
        title && (
          <span>{title}</span>
        )
      }
    </Container>
  )
}