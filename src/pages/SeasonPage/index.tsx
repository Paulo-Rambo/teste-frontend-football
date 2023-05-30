import React from "react";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import SeasonList from "./seasonList";
import { MainTitle } from "../../styles/titles";
import Loading from "../../components/loading";
import RootState from "../../interfaces/types";

export default function SeasonPage() {
  const loading = useSelector((state: RootState) => state.seasons.loading);
  return (
    <MainContainer>{loading ? <Loading /> : <MainSeason />}</MainContainer>
  );
}

export function MainSeason() {
  const seasonList = useSelector(
    (state: RootState) => state.seasons.seasonList
  );
  return (
    <>
      <div>
        <MainTitle>Escolha o ano da temporada:</MainTitle>
      </div>
      <div className="listContainer">
        {!seasonList ? <></> : <SeasonList list={seasonList} />}
      </div>
    </>
  );
}
