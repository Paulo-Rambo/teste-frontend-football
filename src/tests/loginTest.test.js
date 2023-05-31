import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../components/forms/loginForm";
import { ToastContainer } from "react-toastify";
import { waitFor } from "@testing-library/react";
import store from "../redux/store";
require("dotenv").config({ path: ".env" });

test("realiza o login com sucesso", async () => {
  console.log(process.env.RAPIDAPI_KEY);
  // Renderize o componente de login
  render(
    <Provider store={store}>
      <ToastContainer />
      <MemoryRouter>{<LoginForm />}</MemoryRouter>
    </Provider>
  );
  // Encontre os elementos de input e o botão de login
  const keyInput = screen.getByLabelText("Coloque sua chave aqui");
  const loginButton = screen.getByText("Entrar");
  // Preencha os campos de input
  fireEvent.change(keyInput, {
    target: { value: process.env.RAPIDAPI_KEY },
  });
  // Clique no botão de login
  fireEvent.submit(loginButton);
  waitFor(() => {
    const reduxState = store.getState();
    expect(reduxState.login.authStatus).toEqual(true);
  });
});
