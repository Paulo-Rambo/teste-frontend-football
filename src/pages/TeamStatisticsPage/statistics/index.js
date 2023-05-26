import { GraphicsDiv } from "./styles";
import GoalsGraphic from "./components/goalsGraphic";
import FormationStatistics from "./components/formationStatistics";
import ScoreStatistics from "./components/scoreStatistics";

export default function TeamStatistic() {
  return (
    <GraphicsDiv>
      <FormationStatistics />

      <ScoreStatistics />
      <GoalsGraphic />
    </GraphicsDiv>
  );
}
