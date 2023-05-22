import axios from "axios";
import loginUser from "./login/login";

export const instance = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com/v3",
});

export { loginUser };
