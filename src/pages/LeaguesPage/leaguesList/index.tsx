import LeagueCard from "../leaguesCard";
import { ListLeagueCardsStyle } from "./styles";
import { ILeague } from "../../../redux/leagues/leaguesSlice";

interface IProps {
  list: ILeague[];
}

export default function LeagueList(props: IProps) {
  const items = props?.list;

  return (
    <ListLeagueCardsStyle>
      <div className="sectionRow">
        {items?.map((item: ILeague) => (
          <LeagueCard key={item.id} league={item} />
        ))}
      </div>
    </ListLeagueCardsStyle>
  );
}
