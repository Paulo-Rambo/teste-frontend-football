import { instance } from "..";

export default function getStatistisByTeam(userKey, season, leagueId, teamId) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get(
    `/teams/statistics?season=${season}&league=${leagueId}&team=${teamId}`,
    {
      headers,
    }
  );
}
