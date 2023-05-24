import LeagueCard from "../leaguesCard";
import { ListLeagueCardsStyle } from "./styles";

export default function LeagueList(props) {
  const items = props?.list;
  const itemsPerRow = 3;
  const rows = Array.from(
    { length: Math.ceil(items.length / itemsPerRow) },
    (v, i) => items.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow)
  );
  return (
    <ListLeagueCardsStyle>
      {rows.map((row, rowIndex) => (
        <div className="sectionRow" key={rowIndex}>
          {row.map((item, index) => (
            <LeagueCard key={item.id} league={item} />
          ))}
        </div>
      ))}
    </ListLeagueCardsStyle>
  );
}
