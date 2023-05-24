import { LeagueCardStyle } from "./styles";
import { useDispatch } from "react-redux";
import { SelectButton } from "../../styles/buttons";
import {
  requestTeamPlayers,
  requestTeamStatistics,
} from "../../redux/dashboard/dashBoardSlice";
import { useNavigate } from "react-router";

export default function TeamCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSelectTeamCard(name) {
    if (name === "jogadores") {
      dispatch(requestTeamPlayers(props.team.id));
      navigate("/dashboard/players");
      return;
    }
    dispatch(requestTeamStatistics(props.team.id));
    navigate("/dashboard/players");
    console.log(props.team.id);
  }
  return (
    <LeagueCardStyle>
      <div className="teamDetails">
        <div>
          <div className="nameDiv">
            <div>{props.team.name}</div>
            <div>{props.team.code}</div>
          </div>
          <div className="descriptionTeam">
            <div>Country: {props.team.country}</div>
            <div>Founded: {props.team.founded}</div>
          </div>
        </div>

        <div className="imgBox">
          <img alt={props.team.name} src={props.team.logo} />
        </div>
      </div>
      <div className="buttonsDiv">
        <SelectButton onClick={() => handleSelectTeamCard("jogadores")}>
          Jogadores
        </SelectButton>
        <SelectButton onClick={() => handleSelectTeamCard("estatisticas")}>
          Estatísticas
        </SelectButton>
      </div>
    </LeagueCardStyle>
  );
}
