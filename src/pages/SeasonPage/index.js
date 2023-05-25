import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import SeasonList from "./seasonList";
import { MainTitle } from "../../styles/titles";
import Loading from "../../components/loading";

export default function SeasonPage() {
  const loading = useSelector((state) => state.dashboard.loading);
  return (
    <MainContainer>{loading ? <Loading /> : <MainSeason />}</MainContainer>
  );
}

export function MainSeason() {
  const seasonList = useSelector((state) => state.dashboard.seasonList);
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
