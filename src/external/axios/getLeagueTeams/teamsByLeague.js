import { instance } from "..";

export default function getTeamsByLeague(userKey, year, leagueId) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get(`/teams?season=${year}&league=${leagueId}`, {
    headers,
  });
}
