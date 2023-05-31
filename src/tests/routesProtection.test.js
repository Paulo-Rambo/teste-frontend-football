import { configureStore } from "@reduxjs/toolkit";
import Dashboard from "../pages/Dashboard";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { reducer } from "../redux/store";
import { waitFor } from "@testing-library/react";

describe("testa se as rotas estão protegidas de usuarios não logados", () => {
  test("testa se usuario logado tem acesso a dashboard", () => {
    const history = createMemoryHistory();

    const mockState = {
      login: {
        authStatus: true,
      },
    };
    const storeMocked = configureStore({
      reducer: reducer,
      preloadedState: mockState,
    });

    render(
      <Provider store={storeMocked}>
        <ToastContainer />
        <MemoryRouter history={history}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() => {
      expect(screen.getByText("Logout")).toBeInTheDocument();
    });
  });

  test("testa se usuario não logado tem acesso a dashboard", () => {
    const history = createMemoryHistory();

    const mockState = {
      login: {
        authStatus: false,
      },
    };
    const storeMocked = configureStore({
      reducer: reducer,
      preloadedState: mockState,
    });

    render(
      <Provider store={storeMocked}>
        <ToastContainer />
        <MemoryRouter history={history}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() => {
      expect(screen.getByText("Coloque sua chave aqui")).toBeInTheDocument();
    });
  });
});
