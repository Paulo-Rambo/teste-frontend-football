import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import SeasonList from "../../components/seasonList";

import { MainTitle } from "../../styles/titles";

export default function SeasonPage() {
  const seasonList = useSelector((state) => state.dashboard.seasonList);
  return (
    <MainContainer>
      <div>
        <MainTitle>Escolha o ano da temporada</MainTitle>
      </div>
      <div className="listContainer">
        {!seasonList ? <></> : <SeasonList list={seasonList} />}
      </div>
    </MainContainer>
  );
}
