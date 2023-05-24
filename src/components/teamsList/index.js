import TeamCard from "../teamCard";
import { ListTeamCardsStyle } from "./styles";
import { useSelector } from "react-redux";

export default function TeamsList() {
  const { filteredTeamsList } = useSelector((state) => state).dashboard;
  const items = filteredTeamsList;
  const itemsPerRow = 3;
  const rows = Array.from(
    { length: Math.ceil(items.length / itemsPerRow) },
    (v, i) => items.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );
  return (
    <ListTeamCardsStyle>
      {rows.map((row, rowIndex) => (
        <div className="sectionRow" key={rowIndex}>
          {row.map((item, index) => (
            <TeamCard key={item.team.id} team={item.team} />
          ))}
        </div>
      ))}
    </ListTeamCardsStyle>
  );
}
