import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle, SpanStyle } from "../../styles/titles";
import TeamsList from "./teamsList";
import { SearchBoxStyle } from "../../styles/searchBox";
import { useDispatch } from "react-redux";
import { filterTeamsList } from "../../redux/teams/teamsSlice";
import NotFoundComponent from "../../components/notFound";
import { RootState } from "../../redux/store";
import { ChangeEvent } from "react";

export default function TeamsPage() {
  const { loading } = useSelector((state: RootState) => state).teams;
  return <MainContainer>{loading ? <Loading /> : <MainTeams />}</MainContainer>;
}

export function MainTeams() {
  const { selectedTeamsList } = useSelector((state: RootState) => state).teams;
  return (
    <>
      {selectedTeamsList?.length === 0 ? (
        <NotFoundComponent text={"Não foram encontrados times nesta liga"} />
      ) : (
        <>
          <SearchBox />
          <div>
            <MainTitle>Estes são os times da liga:</MainTitle>
            <SpanStyle>Clique no time para ver os jogadores.</SpanStyle>
          </div>
          <div>
            <TeamsList />
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
    dispatch(filterTeamsList(val));
  }
  return (
    <SearchBoxStyle>
      <label htmlFor="teams">Busque o time aqui.</label>
      <input
        onChange={(event) => handleListFiltter(event)}
        id="teams"
        type="text"
        placeholder="busque o time..."
      ></input>
    </SearchBoxStyle>
  );
}
