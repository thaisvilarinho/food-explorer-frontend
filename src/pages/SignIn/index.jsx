
import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from '../../hooks/auth';

import { Container, Form, Logo } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

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
            id="email"
            label="E-mail"
            type="text"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            id="password"
            label="Senha"
            autoComplete="off"
            minLength="6"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </fieldset>

        <Button 
          title="Entrar" 
          onClick={handleSignIn}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
