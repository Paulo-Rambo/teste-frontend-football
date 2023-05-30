import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStatistisByTeam } from "../../external/axios";
import { getBiggerLineup } from "../auxFunctions";

export const requestTeamStatistics = createAsyncThunk(
  "statistics/requestTeamStatistics",
  async (teamId, { getState }) => {
    const { login } = getState();
    const { leagues } = getState();
    const { teams } = getState();
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
  initialState: {
    loading: true,
    error: null,
    lineups: {},
    goals: {},
    fixtures: {},
  },
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
