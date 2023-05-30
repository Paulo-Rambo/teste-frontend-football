import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStatistisByTeam } from "../../external/axios";
import { getBiggerLineup } from "../auxFunctions";
import RootState from "../../interfaces/types";

interface IPlayed {
  total: number | null;
}
interface IWins {
  total: number | null;
}
interface IDraws {
  total: number | null;
}
interface ILoses {
  total: number | null;
}
interface IFixtures {
  played: IPlayed;
  wins: IWins;
  draws: IDraws;
  loses: ILoses;
}
interface ITimes {
  total: number | null;
  percentage: number | null;
}
interface IGoals {
  "0-15": ITimes;
  "16-30": ITimes;
  "31-45": ITimes;
  "46-60": ITimes;
  "61-75": ITimes;
  "76-90": ITimes;
  "91-105": ITimes;
  "106-120": ITimes;
}

interface IPlayed {
  total: number | null;
}
interface IWins {
  total: number | null;
}
interface IDraws {
  total: number | null;
}
interface ILoses {
  total: number | null;
}

interface IFixtures {
  played: IPlayed;
  wins: IWins;
  draws: IDraws;
  loses: ILoses;
}

interface ILineups {
  formation: string | null;
  played: number | null;
}

export interface IStatisticsState {
  loading: boolean;
  error: string | null | undefined;
  lineups: ILineups[];
  goals: IGoals;
  fixtures: IFixtures;
}

const initialState: IStatisticsState = {
  loading: true,
  error: null,
  lineups: [],
  goals: {
    "0-15": { total: null, percentage: null },
    "16-30": { total: null, percentage: null },
    "31-45": { total: null, percentage: null },
    "46-60": { total: null, percentage: null },
    "61-75": { total: null, percentage: null },
    "76-90": { total: null, percentage: null },
    "91-105": { total: null, percentage: null },
    "106-120": { total: null, percentage: null },
  },
  fixtures: {
    played: { total: null },
    wins: { total: null },
    draws: { total: null },
    loses: { total: null },
  },
};

export const requestTeamStatistics = createAsyncThunk(
  "statistics/requestTeamStatistics",
  async (teamId: number, { getState }) => {
    const { login, leagues, teams }: RootState = getState() as RootState;
    const { userKey } = login;
    const { selectedYear } = leagues;
    const { selectedLeagueId } = teams;

    const response = await getStatistisByTeam(
      userKey,
      selectedYear,
      selectedLeagueId,
      teamId
    );
    let lineups = response.data.response.lineups;
    const newLineups = getBiggerLineup(lineups);
    const goals = response.data.response.goals.for.minute;
    const fixtures = response.data.response.fixtures;

    return { newLineups, goals, fixtures };
  }
);

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestTeamStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestTeamStatistics.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.lineups = action.payload.newLineups;
        state.goals = action.payload.goals;
        state.fixtures = action.payload.fixtures;
      })
      .addCase(requestTeamStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error.message);
      });
  },
});

export default statisticsSlice.reducer;
