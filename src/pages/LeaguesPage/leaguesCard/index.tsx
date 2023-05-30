import React from "react";
import { LeagueCardStyle } from "./styles";
import { useDispatch } from "react-redux";
import { requestTeams } from "../../../redux/teams/teamsSlice";
import { useNavigate } from "react-router";
import { AppDispatch } from "../../../redux/store";
import { ILeague } from "../../../redux/leagues/leaguesSlice";

interface IProps {
  key: number;
  league: ILeague;
}

export default function LeagueCard(props: IProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
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
