import { TableStyle } from "../styles";
import { useSelector } from "react-redux";

export default function ScoreStatistics() {
  const { fixtures } = useSelector((state) => state).statistics;
  return (
    <TableStyle>
      <thead>
        <tr>
          <th colspan="4" className="tableTitleStyle">
            Pontuações do time
          </th>
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
  );
}
