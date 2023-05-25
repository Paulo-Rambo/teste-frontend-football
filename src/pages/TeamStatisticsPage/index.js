import Loading from "../../components/loading";
import { useSelector } from "react-redux";
import { MainContainer } from "../../styles/mainCntainer";
import { MainTitle } from "../../styles/titles";
import TeamStatistic from "./statistics";
import NotFoundComponent from "../../components/notFound";

export default function TeamStatisticPage() {
  const { loading } = useSelector((state) => state).dashboard;
  return (
    <MainContainer>{loading ? <Loading /> : <MainStatistics />}</MainContainer>
  );
}

export function MainStatistics() {
  return (
    <>
      <div>
        <MainTitle>Estes são os principais dados do time:</MainTitle>
      </div>
      <div>
        <TeamStatistic />
      </div>
    </>
  );
}
