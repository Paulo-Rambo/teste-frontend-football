import { IDashboardState } from "../redux/dashboard/dashBoardSlice";
import { ILoginState } from "../redux/login/loginSlice";
import { ITeamsState } from "../redux/teams/teamsSlice";
import { IStatisticsState } from "../redux/statistics/statisticsSlice";
import { ISeasonState } from "../redux/season/seasonsSlice";
import { IPlayerState } from "../redux/players/playersSlice";
import { ILeaguesState } from "../redux/leagues/leaguesSlice";

export default interface RootState {
  login: ILoginState;
  dashboard: IDashboardState;
  teams: ITeamsState;
  statistics: IStatisticsState;
  seasons: ISeasonState;
  players: IPlayerState;
  leagues: ILeaguesState;
}
