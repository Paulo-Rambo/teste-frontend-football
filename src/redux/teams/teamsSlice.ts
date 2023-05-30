import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTeamsByLeague } from "../../external/axios";
import RootState from "../../interfaces/types";

export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: false;
  logo: string;
}

interface Iteams {
  team: ITeam;
}

export interface ITeamsState {
  loading: boolean;
  error: string | null | undefined;
  selectedTeamsList: Iteams[];
  filteredTeamsList: Iteams[];
  selectedLeagueId: string;
}

const initialState: ITeamsState = {
  loading: true,
  error: null,
  selectedTeamsList: [],
  filteredTeamsList: [],
  selectedLeagueId: "",
};

export const requestTeams = createAsyncThunk(
  "teams/requestTeams",
  async (leagueId: number, { getState }) => {
    const { login, leagues }: RootState = getState() as RootState;
    const { userKey } = login;
    const { selectedYear } = leagues;
    const response = await getTeamsByLeague(userKey, selectedYear, leagueId);
    const newData = [leagueId, response.data];
    return newData;
  }
);

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    filterTeamsList: (state, action) => {
      const searchValue = action.payload;
      const list = state.selectedTeamsList;
      const newList = list.filter((team) => {
        if (team.team.name) {
          team.team.name.toLowerCase().startsWith(searchValue.toLowerCase());
        }
      });
      state.filteredTeamsList = newList;
      console.log(newList);
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default teamsSlice.reducer;
export const { filterTeamsList } = teamsSlice.actions;
