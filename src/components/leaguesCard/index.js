import { LeagueCardStyle } from "./styles";
import { useDispatch } from "react-redux";
import { requestTeams } from "../../redux/dashboard/dashBoardSlice";
import { useNavigate } from "react-router";

export default function LeagueCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSelectLeagueCard() {
    console.log(props.league.id);
    dispatch(requestTeams(props.league.id));
    navigate("/dashboard/teams");
  }
  return (
    <LeagueCardStyle onClick={() => handleSelectLeagueCard()}>
      <div className="nameDiv">
        <div>{props.league.name}</div>
        <div>{props.league.type}</div>
      </div>
      <div className="imgBox">
        <img alt={props.league.name} src={props.league.logo} />
      </div>
    </LeagueCardStyle>
  );
}
