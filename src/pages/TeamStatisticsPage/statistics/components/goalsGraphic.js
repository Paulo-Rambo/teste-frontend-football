import { GraphicStyle, GraphicBox } from "../styles";
import { useSelector } from "react-redux";

export default function GoalsGraphic() {
  const { goals } = useSelector((state) => state).statistics;

  const renderGraphic = () => {
    return Object.keys(goals).map((intervalo) => {
      const item = goals[intervalo];

      return (
        <div className="goalsGraphicBox">
          <li key={intervalo}>
            <span className="percentageSpan">{item.percentage}</span>
            <div
              className="candleDiv"
              style={{ height: item.percentage }}
            ></div>
            <span className="timeSpan">{intervalo}</span>
          </li>
        </div>
      );
    });
  };
  return (
    <>
      <GraphicBox>
        <h3>Porcentagens de gols por minutos de partida:</h3>
        <GraphicStyle>
          <ul>{renderGraphic()}</ul>
        </GraphicStyle>
      </GraphicBox>
    </>
  );
}
