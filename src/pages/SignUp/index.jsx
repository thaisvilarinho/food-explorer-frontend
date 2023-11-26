import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Form, Logo } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
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
          <legend>Crie sua conta</legend>
          <Input
            id="name"
            label="Seu nome"
            type="text"
            lighterBackgroundColor
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />

          <Input
            id="email"
            label="E-mail"
            type="text"
            lighterBackgroundColor
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            id="password"
            label="Senha"
            type="password"
            minLength="6"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </fieldset>

        <Button 
          title="Criar conta" 
          onClick={handleSignUp}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
