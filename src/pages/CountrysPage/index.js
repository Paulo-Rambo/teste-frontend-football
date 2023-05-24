import CountryList from "../../components/countryList";
import { useSelector, useDispatch } from "react-redux";
import { filterCountryList } from "../../redux/dashboard/dashBoardSlice";
import { MainContainer } from "../../styles/mainCntainer";

export default function CountrysPage() {
  const dispatch = useDispatch();
  const filtredCountryList = useSelector(
    (state) => state.dashboard.filtredCountryList
  );
  function handleListFiltter(event) {
    const val = event.target.value;
    dispatch(filterCountryList(val));
  }
  return (
    <MainContainer>
      <div>
        <label htmlFor="countrys">Busque o país</label>
        <input
          onChange={(event) => handleListFiltter(event)}
          id="countrys"
          type="text"
          placeholder="coloque o país..."
        ></input>
      </div>
      <div className="listContainer">
        <CountryList list={filtredCountryList} />
      </div>
    </MainContainer>
  );
}
