import axios from "axios";
import loginUser from "./login/login";
import getCountrys from "./login/getCountry";

export const instance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
});

export { loginUser, getCountrys };
