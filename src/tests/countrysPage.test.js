import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CountryList from "../pages/CountrysPage/countryList";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";

jest.mock("axios");

describe("testa se o login", () => {
  test("Teste de integração da lista de itens com dados reais da API", async () => {
    const mockData = [
      {
        name: "Albania",
        code: "AL",
        flag: "https://media-3.api-sports.io/flags/al.svg",
      },
      {
        name: "Algeria",
        code: "DZ",
        flag: "https://media-2.api-sports.io/flags/dz.svg",
      },
      {
        name: "Andorra",
        code: "AD",
        flag: "https://media-1.api-sports.io/flags/ad.svg",
      },
    ];

    render(
      <Provider store={store}>
        <MemoryRouter>{<CountryList list={mockData} />}</MemoryRouter>
      </Provider>
    );

    // Verifica se os itens estão sendo exibidos corretamente
    expect(screen.getByText("Albania")).toBeInTheDocument();
    expect(screen.getByText("DZ")).toBeInTheDocument();
    expect(screen.getByAltText("Albania")).toBeInTheDocument();
  });
});
