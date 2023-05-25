import LeagueList from "../../components/leaguesList";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import { NotFound } from "../../styles/notFound";
import Loading from "../../components/loading";
import { SpanStyle } from "../../styles/titles";

export default function LeaguesPage() {
  const { loading } = useSelector((state) => state).dashboard;
  return (
    <MainContainer>{loading ? <Loading /> : <MainLeague />}</MainContainer>
  );
}

export function MainLeague() {
  const { leagueBySeasonAndCountryList, selectedCountry, selectedYear } =
    useSelector((state) => state).dashboard;
  console.log(leagueBySeasonAndCountryList);
  return (
    <>
      {leagueBySeasonAndCountryList?.length === 0 ? (
        <NotFound>Não foram encontrado ligas para este ano</NotFound>
      ) : (
        <>
          <div>
            <MainTitle>
              As ligas no país {selectedCountry} para o ano {selectedYear}{" "}
              foram:
            </MainTitle>
            <SpanStyle>Clique na liga para ver os times.</SpanStyle>
          </div>
          <div>
            <LeagueList list={leagueBySeasonAndCountryList} />
          </div>
        </>
      )}
    </>
  );
}
