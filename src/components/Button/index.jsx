import { Container } from './styles';

export function Button({ icon: Icon, title, darkColor = true, ...rest }) {
  return (
    <Container 
      type="button" 
      {...rest}
      $darkColor={darkColor}
    >
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}