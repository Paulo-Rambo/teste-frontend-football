import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import { NotFound } from "../../styles/notFound";
import { SearchBoxStyle } from "../../styles/searchBox";
import { useDispatch } from "react-redux";
import { filterPlayersList } from "../../redux/dashboard/dashBoardSlice";
import PlayersList from "../../components/playersList";

export default function PlayersPage() {
  const { loading } = useSelector((state) => state).dashboard;
  return (
    <MainContainer>{loading ? <Loading /> : <MainPlayers />}</MainContainer>
  );
}

export function MainPlayers() {
  const { filteredPlayersList } = useSelector((state) => state).dashboard;
  return (
    <>
      {filteredPlayersList?.length === 0 ? (
        <NotFound>Não foram encontrados os jogadores.</NotFound>
      ) : (
        <>
          <div>
            <MainTitle>Jogadores:</MainTitle>
          </div>
          <SearchBox />
          <div>
            <PlayersList />
          </div>
        </>
      )}
    </>
  );
}

export function SearchBox() {
  const dispatch = useDispatch();
  function handleListFiltter(event) {
    const val = event.target.value;
    dispatch(filterPlayersList(val));
  }
  return (
    <SearchBoxStyle>
      <label htmlFor="player">Busque o jogador.</label>
      <input
        onChange={(event) => handleListFiltter(event)}
        id="player"
        type="text"
        placeholder="coloque o nome..."
      ></input>
    </SearchBoxStyle>
  );
}
