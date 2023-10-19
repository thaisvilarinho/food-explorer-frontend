
import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { Container, Content, Hero, Carousels } from "./styles";

export function Home(){
 const lista = [
    {
      id: 1,
      img: "../../../public/dish1.png",
      title: "Salada Ravanello >",
      description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 'R$ 49,97'
    },
    {
      id: 2,
      img: "../../../public/dish2.png",
      title: "Spaguetti Gambe >",
      description: "Massa fresca com camarões e pesto.",
      price: 'R$ 79,97'
    },
    {
      id: 3,
      img: "../../../public/dish3.png",
      title: "Torradas de Parma >",
      description: "Presunto de parma e rúcula em um pão com fermentação natural.",
      price: 'R$ 25,97'
    },
    {
      id: 4,
      img: "../../../public/dish4.png",
      title: "Salada Molla  >",
      description: "Massa fresca com camarões e pesto. ",
      price: 'R$ 79,97'
    },
    {
      id: 5,
      img: "../../../public/dish1.png",
      title: "Salada Ravanello >",
      description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: 'R$ 49,97'
    }
  ]
  return (
    <Container>
      <Header />
      <Content>
        <Hero>
          <img src="../../../public/hero.png" alt="Hero image" />

          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Hero>

        <Carousels>
          <Carousel title="Refeições" items={lista} /> 

        </Carousels>

      </Content>
    </Container>
  )
}