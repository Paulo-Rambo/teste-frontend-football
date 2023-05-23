import { instance } from "..";

export default function getCountrys(userKey) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get("/countries", { headers });
}
