import { instance } from "..";

export default function getLeagues(userKey, country, year) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get(`/leagues?season=${year}&country=${country}`, {
    headers,
  });
}
