import { LeagueCardStyle } from "./styles";

export default function LeagueCard(props) {
  return (
    <LeagueCardStyle>
      <div className="nameDiv">
        <div>{props.league.type}</div>
        <div>{props.league.name}</div>
      </div>
      <div className="imgBox">
        <img src={props.league.logo} />
      </div>
    </LeagueCardStyle>
  );
}
