import { instance } from "..";

export default function getPlayersByTeam(userKey, teamId, season) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get(`/players?team=${teamId}&season=${season}`, {
    headers,
  });
}
