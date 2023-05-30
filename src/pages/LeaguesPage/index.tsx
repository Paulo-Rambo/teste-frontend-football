import React from "react";
import LeagueList from "./leaguesList";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import NotFoundComponent from "../../components/notFound";
import Loading from "../../components/loading";
import { SpanStyle } from "../../styles/titles";
import { RootState } from "../../redux/store";

export default function LeaguesPage() {
  const { loading } = useSelector((state: RootState) => state).leagues;
  return (
    <MainContainer>{loading ? <Loading /> : <MainLeague />}</MainContainer>
  );
}

export function MainLeague() {
  const { leagueBySeasonAndCountryList, selectedYear } = useSelector(
    (state: RootState) => state
  ).leagues;
  const { selectedCountry } = useSelector(
    (state: RootState) => state
  ).dashboard;
  console.log(leagueBySeasonAndCountryList);
  return (
    <>
      {leagueBySeasonAndCountryList?.length === 0 ? (
        <NotFoundComponent text={"Não foram encontrado ligas para este ano."} />
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
