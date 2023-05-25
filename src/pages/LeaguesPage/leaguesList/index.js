import LeagueCard from "../leaguesCard";
import { ListLeagueCardsStyle } from "./styles";

export default function LeagueList(props) {
  const items = props?.list;

  return (
    <ListLeagueCardsStyle>
      <div className="sectionRow">
        {items?.map((item, index) => (
          <LeagueCard key={item.id} league={item} />
        ))}
      </div>
    </ListLeagueCardsStyle>
  );
}
