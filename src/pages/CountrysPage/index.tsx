import { ChangeEvent } from "react";
import CountryList from "./countryList";
import { useSelector, useDispatch } from "react-redux";
import { filterCountryList } from "../../redux/dashboard/dashBoardSlice";
import { MainContainer } from "../../styles/mainCntainer";
import { SearchBoxStyle } from "../../styles/searchBox";
import Loading from "../../components/loading";
import { RootState } from "../../redux/store";

export default function CountrysPage() {
  const { loading } = useSelector((state: RootState) => state).login;
  return (
    <MainContainer>{loading ? <Loading /> : <CountryMain />}</MainContainer>
  );
}
export function CountryMain() {
  const dispatch = useDispatch();
  const filtredCountryList = useSelector(
    (state: RootState) => state.dashboard.filtredCountryList
  );
  function handleListFiltter(event: ChangeEvent<HTMLInputElement>) {
    const val = event.target.value;
    dispatch(filterCountryList(val));
  }
  return (
    <>
      <SearchBoxStyle>
        <label htmlFor="countrys">Busque o país</label>
        <input
          onChange={(event) => handleListFiltter(event)}
          id="countrys"
          type="text"
          placeholder="coloque o país..."
        ></input>
      </SearchBoxStyle>
      <div className="listContainer">
        <CountryList list={filtredCountryList} />
      </div>
    </>
  );
}
