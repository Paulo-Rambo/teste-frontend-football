import { ListCards } from "./styles";
import { useSelector } from "react-redux";
import PlayerCard from "../playerCard";
export default function PlayersList() {
  const { filteredPlayersList } = useSelector((state) => state).dashboard;
  const items = filteredPlayersList;
  const itemsPerRow = 4;
  const rows = Array.from(
    { length: Math.ceil(items.length / itemsPerRow) },
    (v, i) => items.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );
  return (
    <ListCards>
      {rows.map((row, rowIndex) => (
        <div className="sectionRow" key={rowIndex}>
          {row.map((item, index) => (
            <PlayerCard key={index} obj={item.player} />
          ))}
        </div>
      ))}
    </ListCards>
  );
}
