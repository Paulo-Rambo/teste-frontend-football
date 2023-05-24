import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import { NotFound } from "../../styles/notFound";
import TeamsList from "../../components/teamsList";
import { SearchBoxStyle } from "../../styles/searchBox";
import { useDispatch } from "react-redux";
import { filterTeamsList } from "../../redux/dashboard/dashBoardSlice";

export default function TeamsPage() {
  const { loading } = useSelector((state) => state).dashboard;
  return <MainContainer>{loading ? <Loading /> : <MainTeams />}</MainContainer>;
}

export function MainTeams() {
  const { selectedTeamsList } = useSelector((state) => state).dashboard;
  return (
    <>
      {selectedTeamsList?.length === 0 ? (
        <NotFound>Não foram encontrado ligas para este ano</NotFound>
      ) : (
        <>
          <SearchBox />
          <div>
            <MainTitle>Estes são os times da liga:</MainTitle>
            <span>Clique no time para ver os jogadores.</span>
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
  function handleListFiltter(event) {
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
