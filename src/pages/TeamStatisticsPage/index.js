import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import { NotFound } from "../../styles/notFound";
import TeamStatistic from "../../components/teamsList";

export default function TeamStatisticPage() {
  const { loading } = useSelector((state) => state).dashboard;
  return (
    <MainContainer>{loading ? <Loading /> : <MainStatistics />}</MainContainer>
  );
}

export function MainStatistics() {
  const { selectTeamStatistic } = useSelector((state) => state).dashboard;
  return (
    <>
      {selectTeamStatistic?.length === 0 ? (
        <NotFound>Não foram encontradas estatísticas deste time</NotFound>
      ) : (
        <>
          <div>
            <MainTitle>Estes são os principais dados do time:</MainTitle>
          </div>
          <div>
            <TeamStatistic />
          </div>
        </>
      )}
    </>
  );
}
