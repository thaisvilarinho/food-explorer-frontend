import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Logo } from "./styles";

export function SignIn() {
  return (
    <Container>
      <aside>
        <Logo>
          <svg
            width="43"
            height="48"
            viewBox="0 0 43 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" />
          </svg>
          <h1>food explorer</h1>
        </Logo>
      </aside>
      
      <Form>
        <fieldset>
          <legend>Faça login</legend>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            id="email"
            type="text"
            name="E-mail"
          />

          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            id="password"
            label="Senha"
          />
        </fieldset>

        <Button title="Entrar" />

        <a href="/">Criar uma conta</a>
      </Form>
    </Container>
  );
}
