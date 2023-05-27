import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSeasons,
  getLeagues,
  getTeamsByLeague,
  getPlayersByTeam,
  getStatistisByTeam,
} from "../../external/axios";
import { getBiggerLineup } from "./auxFunctions";

export const requestTeamStatistics = createAsyncThunk(
  "dashboard/requestTeamStatistics",
  async (teamId, { getState }) => {
    const { login } = getState();
    const { dashboard } = getState();
    const { userKey } = login;
    const { selectedYear, selectedLeagueId } = dashboard;
    const response = await getStatistisByTeam(
      userKey,
      selectedYear,
      selectedLeagueId,
      teamId
    );
    console.log(response.data.response.lineups);
    console.log(response.data.response.goals.for.minute);
    console.log(response.data.response.fixtures);
    let lineups = response.data.response.lineups;
    const newLineups = getBiggerLineup(lineups);
    const goals = response.data.response.goals.for.minute;
    const fixtures = response.data.response.fixtures;

    return { newLineups, goals, fixtures };
  }
);

export const requestTeamPlayers = createAsyncThunk(
  "dashboard/requestTeamPlayers",
  async (teamId, { getState }) => {
    const { login } = getState();
    const { dashboard } = getState();
    const { userKey } = login;
    const { selectedYear } = dashboard;
    const response = await getPlayersByTeam(userKey, teamId, selectedYear);
    console.log(response.data);
    return response.data;
  }
);

export const requestTeams = createAsyncThunk(
  "dashboard/requestTeams",
  async (leagueId, { getState }) => {
    const { login } = getState();
    const { dashboard } = getState();
    const { userKey } = login;
    const { selectedYear } = dashboard;
    const response = await getTeamsByLeague(userKey, selectedYear, leagueId);
    const newData = [leagueId, response.data];
    return newData;
  }
);

export const requestSeasons = createAsyncThunk(
  "dashboard/requestSeasons",
  async (_, { getState }) => {
    const { login } = getState();
    const { userKey } = login;
    console.log(userKey);
    const response = await getSeasons(userKey);

    return response.data;
  }
);

export const requestLeagues = createAsyncThunk(
  "dashboard/requestLeagues",
  async (year, { getState }) => {
    const { login } = getState();
    const { dashboard } = getState();
    const { userKey } = login;
    const { selectedCountry } = dashboard;
    const response = await getLeagues(userKey, selectedCountry, year);
    const newData = [year, response.data];
    return newData;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: true,
    error: null,
    countryList: [],
    filtredCountryList: [],
    seasonList: [],
    selectedCountry: "",
    leagueBySeasonAndCountryList: [],
    selectedYear: "",
    selectedTeamsList: [],
    filteredTeamsList: [],
    selectedPlayersList: [],
    filteredPlayersList: [],
    selectedLeagueId: "",
    lineups: {},
    goals: {},
    fixtures: {},
    notFound: false,
  },
  reducers: {
    setTeamName: (state, action) => {
      console.log(`team name ${action.payload}`);
      state.selectedCountry = action.payload;
      return;
    },
    setCountryList: (state, action) => {
      let newList = action.payload;
      const newListIndice = action.payload.findIndex(
        (obj) => obj.name === "World"
      );
      if (newList !== -1) {
        newList.splice(newListIndice, 1);
      }
      state.countryList = newList;
      state.filtredCountryList = newList;
      console.log("setando country list");
    },
    filterCountryList: (state, action) => {
      const searchValue = action.payload;
      const list = state.countryList;
      const newList = list.filter((country) =>
        country.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      state.filtredCountryList = newList;
      console.log(newList);
    },
    filterTeamsList: (state, action) => {
      const searchValue = action.payload;
      const list = state.selectedTeamsList;
      const newList = list.filter((team) =>
        team.team.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      state.filteredTeamsList = newList;
      console.log(newList);
    },
    filterPlayersList: (state, action) => {
      const searchValue = action.payload;
      const list = state.selectedPlayersList;
      const newList = list.filter((obj) =>
        obj.player.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      state.filteredPlayersList = newList;
      console.log(newList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestSeasons.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestSeasons.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.seasonList = action.payload.response;
        console.log(action.payload.response);
      })
      .addCase(requestSeasons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(requestLeagues.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestLeagues.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        const newList = action.payload[1].response.map((item) => item.league);
        console.log(newList);
        state.selectedYear = action.payload[0];
        state.leagueBySeasonAndCountryList = newList;
      })
      .addCase(requestLeagues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(requestTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestTeams.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.selectedTeamsList = action.payload[1].response;
        state.filteredTeamsList = action.payload[1].response;
        state.selectedLeagueId = action.payload[0];
        console.log(action.payload[1].response);
      })
      .addCase(requestTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(requestTeamStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestTeamStatistics.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload);
        state.lineups = action.payload.newLineups;
        state.goals = action.payload.goals;
        state.fixtures = action.payload.fixtures;
        console.log(action.payload);
      })
      .addCase(requestTeamStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error.message);
      })
      .addCase(requestTeamPlayers.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestTeamPlayers.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        if (action.payload.response.length === 0) {
          state.notFound = true;
        } else {
          state.notFound = false;
        }
        state.selectedPlayersList = action.payload.response;
        state.filteredPlayersList = action.payload.response;
        console.log(action.payload.response);
      })
      .addCase(requestTeamPlayers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log(action.error.message);
      });
  },
});

export default dashboardSlice.reducer;
export const {
  setCountryList,
  selectCountrys,
  filterCountryList,
  setTeamName,
  filterTeamsList,
  filterPlayersList,
} = dashboardSlice.actions;
