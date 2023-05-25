import { ListCards } from "./styles";
import { useSelector } from "react-redux";
import PlayerCard from "../playerCard";
export default function PlayersList() {
  const { filteredPlayersList } = useSelector((state) => state).dashboard;
  const items = filteredPlayersList;
  return (
    <ListCards>
      <div className="sectionRow">
        {items.map((item, index) => (
          <PlayerCard key={index} obj={item.player} />
        ))}
      </div>
    </ListCards>
  );
}
