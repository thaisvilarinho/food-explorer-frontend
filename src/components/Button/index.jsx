import { Container } from './styles';

export function Button({ icon: Icon, title, darkColor = true, ...rest }) {
  return (
    <Container 
      type="button" 
      $darkColor={darkColor}
      {...rest}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}