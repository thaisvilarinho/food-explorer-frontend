
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function Home(){
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <img src="../../../public/hero.png" alt="Hero image" />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </section>
      </Content>
    </Container>
  )
}