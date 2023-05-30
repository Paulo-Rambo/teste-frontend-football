import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";
//import dashboardReducer from "./dashboard/dashBoardSlice";
import dashboardReducer from "./dashboard/dashBoardSlice";
import teamsReducer from "./teams/teamsSlice";
import statisticsReducer from "./statistics/statisticsSlice";
import seasonsReducer from "./season/seasonsSlice";
import playersReducer from "./players/playersSlice";
import leaguesReducer from "./leagues/leaguesSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
    teams: teamsReducer,
    statistics: statisticsReducer,
    seasons: seasonsReducer,
    players: playersReducer,
    leagues: leaguesReducer,
  },
});

export default store;
