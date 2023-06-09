import { ChangeEvent } from "react";
import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import NotFoundComponent from "../../components/notFound";
import { SearchBoxStyle } from "../../styles/searchBox";
import { useDispatch } from "react-redux";
import { filterPlayersList } from "../../redux/players/playersSlice";
import PlayersList from "./playersList";
import { RootState } from "../../redux/store";

export default function PlayersPage() {
  const { loading } = useSelector((state: RootState) => state).players;
  return (
    <MainContainer>{loading ? <Loading /> : <MainPlayers />}</MainContainer>
  );
}

export function MainPlayers() {
  const { notFound } = useSelector((state: RootState) => state).players;
  return (
    <>
      {notFound ? (
        <NotFoundComponent text={"Não foram encontrados os jogadores."} />
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
  function handleListFiltter(event: ChangeEvent<HTMLInputElement>) {
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
