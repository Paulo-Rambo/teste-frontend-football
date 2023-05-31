import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
import dashboardReducer from "./dashboard/dashBoardSlice";
import teamsReducer from "./teams/teamsSlice";
import statisticsReducer from "./statistics/statisticsSlice";
import seasonsReducer from "./season/seasonsSlice";
import playersReducer from "./players/playersSlice";
import leaguesReducer from "./leagues/leaguesSlice";

export const reducer = {
  login: loginReducer,
  dashboard: dashboardReducer,
  teams: teamsReducer,
  statistics: statisticsReducer,
  seasons: seasonsReducer,
  players: playersReducer,
  leagues: leaguesReducer,
};

const store = configureStore({
  reducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
