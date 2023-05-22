import { instance } from "..";

export default function loginUser(userKey) {
  const headers = {
    "X-RapidAPI-Key": userKey,
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  };

  return instance.get("/timezone", { headers });
}
