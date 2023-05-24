import axios from "axios";
import loginUser from "./login/login";
import getCountrys from "./login/getCountry";
import getSeasons from "./getSeasons/season";
import getLeagues from "./getLeageBySeason/leageBySeason";
import getTeamsByLeague from "./getLeagueTeams/teamsByLeague";
import getPlayersByTeam from "./getPlayesByTeam/playersByTeam";
import getStatistisByTeam from "./getStatisticsByTeam/statistisByTeam";

export const instance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
});

export {
  loginUser,
  getCountrys,
  getSeasons,
  getLeagues,
  getTeamsByLeague,
  getPlayersByTeam,
  getStatistisByTeam,
};
