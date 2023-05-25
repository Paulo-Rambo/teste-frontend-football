import { useSelector } from "react-redux";
import { GraphicsDiv, TableStyle, GraphicStyle } from "./styles";

export default function TeamStatistic() {
  const { lineups, goals, fixtures } = useSelector((state) => state).dashboard;

  const renderGraphic = () => {
    return Object.keys(goals).map((intervalo) => {
      const item = goals[intervalo];

      return (
        <li key={intervalo}>
          {item.percentage}
          <div
            className="candleDiv"
            style={{ height: item.percentage, backgroundColor: "red" }}
          ></div>
          <span className="timeSpan">{intervalo} min</span>
        </li>
      );
    });
  };

  return (
    <GraphicsDiv>
      <div>
        <h3>Formação mais utilizada na temporada:</h3>
        <span>{lineups.formation}</span>
        <h3>Quantidade</h3>
        <span>{lineups.played}</span>
      </div>
      <div className="tableDiv">
        <TableStyle>
          <thead>
            <tr>
              <th colspan="4">Dados sobre as partidas</th>
            </tr>
          </thead>
          <tr className="celNameStyle">
            <th>Total</th>
            <th>Vitórias</th>
            <th>Derrotas</th>
            <th>Empates</th>
          </tr>
          <tr>
            <td>{fixtures.played.total}</td>
            <td>{fixtures.wins.total}</td>
            <td>{fixtures.loses.total}</td>
            <td>{fixtures.draws.total}</td>
          </tr>
        </TableStyle>
        <GraphicStyle>
          <ul>{renderGraphic()}</ul>
        </GraphicStyle>
      </div>
    </GraphicsDiv>
  );
}
