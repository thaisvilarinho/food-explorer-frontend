import { useState, useEffect } from "react";
import { CaretLeft, UploadSimple } from "@phosphor-icons/react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import {
  Container,
  Content,
  Form,
  ImageWrapper,
  Category,
  Ingredients,
} from "./styles";

export function Dish() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("default");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const [imageName, setImageName] = useState("Selecione imagem");
  const [image, setImage] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    if (newIngredient.length < 1) {
      return alert("Erro: Valor inválido!");
    } else {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];

    URL.createObjectURL(file);

    setImage(file);
    setImageName(file.name);
  }

  async function handleRemoveDish() {
    try {
      setLoadingDelete(true);

      const isConfirm = confirm("Tem certeza que deseja remover este item?");

      if (isConfirm) {
        const response = await api.delete(`/dishes/${params.id}`, { withCredentials: true});

        if(response.status === 204){
          alert("Item removido com sucesso!");

          navigate("/");
        }
      } else {
        return;
      }
    }  catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível remover o prato.");
      }
    }finally {
      setLoadingDelete(false);
    }
  }

  async function handleFormSubmit(event) {
    try {
      event.preventDefault();
      let priceFormatted;

      if (!image) {
        return alert("Você não inseriu uma imagem para o prato!");
      }

      if (!name) {
        return alert("Você não informou o nome do prato!");
      }

      if (!category) {
        return alert("Você não selecionou a categoria do prato!");
      }

      if (ingredients.length < 1) {
        return alert("Adicione pelo menos um ingrediente!");
      }

      if (newIngredient) {
        return alert(
          "Ingrediente informado, mas não adicionado. Adicione ou remova!"
        );
      }

      if (!price) {
        return alert("Erro: Você não informou o preço do prato!");
      } else {
        const priceFloat = parseFloat(price.replace(",", "."));
        if (isNaN(priceFloat)) {
          return alert("O preço informado não é um número válido.");
        }
        priceFormatted = priceFloat.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
      }

      if (!description) {
        return alert("Erro: Você não informou uma descrição para o prato!");
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", priceFormatted);

      if (!Array.isArray(ingredients)) {
        formData.append("ingredients", [ingredients]);
      } else {
        ingredients.map((ingredient) =>
          formData.append("ingredients", ingredient)
        );
      }

      if (params.id) {
        await api
          .put(`/dishes/${params.id}`, formData, { withCredentials: true })
          .then(
            alert("Prato atualizado com sucesso!"),
            navigate(`/details/${params.id}`)
          )
          .catch((error) => {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Falha ao atualizar o prato!");
            }
          });
      } else {
        await api
          .post("/dishes", formData, { withCredentials: true })
          .then(() => {
            alert("Prato adicionado com sucesso!");
            handleBack();
          })
          .catch((error) => {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Falha ao criar o prato!");
            }
          });
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível registrar prato.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`, {
        withCredentials: true,
      });

      const { name, description, category, price, ingredients, image } =
        response.data;

      const priceFormatted = price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      setName(name);
      setDescription(description);
      setCategory(category);
      setPrice(priceFormatted);
      setImage(image);
      setImageName(image);
      setIngredients(ingredients);
    }

    if (params.id) {
      fetchDish();
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={CaretLeft} title="voltar" onClick={handleBack} />

        <Form>
          <fieldset>
            <legend>{params.id ? "Editar Prato" : "Adicionar prato"}</legend>

            <section className="horizontalWrapper">
              <ImageWrapper>
                <span className="legend">Imagem do prato</span>

                <label htmlFor="imagem">
                  <UploadSimple />
                  {imageName}
                </label>
                <input
                  type="file"
                  id="imagem"
                  name="image"
                  accept="image/*"
                  placeholder="Selecione imagem"
                  onChange={handleChangeImage}
                />
              </ImageWrapper>
              <Input
                id="name"
                label="Nome"
                placeholder="Ex.: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <Category>
                <label htmlFor="category" className="legend">
                  Categoria
                </label>

                <select
                  id="category"
                  data-category-default={category === "default"}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="default" disabled>
                    Selecione a categoria
                  </option>
                  <option value="meal">Refeições</option>
                  <option value="dessert">Sobremesas</option>
                  <option value="drink">Bebidas</option>
                </select>
              </Category>
            </section>

            <section className="horizontalWrapper">
              <div>
                <span className="legend">Ingredientes</span>
                <Ingredients>
                  {ingredients.map((ingredient, index) => (
                    <Note
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}

                  <Note
                    isNew
                    id="ingredients"
                    placeholder="Adicionar"
                    autoComplete="off"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </Ingredients>
              </div>
              <div>
                <Input
                  id="price"
                  label="Preço"
                  placeholder="00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
            </section>

            <TextArea
              id="description"
              name="Descrição"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </fieldset>

          <div className="button-wrapper">
            <button
              disabled={loadingDelete}
              className="remove"
              onClick={handleRemoveDish}
            >
              <span>{loadingDelete ? "..." : "Excluir prato"}</span>
            </button>
            <Button
              title={loading ? "Salvando alterações..." : "Salvar alterações"}
              disabled={loading}
              darkColor={false}
              onClick={handleFormSubmit}
            />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
