import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlayersByTeam } from "../../external/axios";

export const requestTeamPlayers = createAsyncThunk(
  "players/requestTeamPlayers",
  async (teamId, { getState }) => {
    const { login } = getState();
    const { dashboard } = getState();
    const { userKey } = login;
    const { selectedYear } = dashboard;
    const response = await getPlayersByTeam(userKey, teamId, selectedYear);
    return response.data;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState: {
    loading: true,
    error: null,
    selectedPlayersList: [],
    filteredPlayersList: [],
  },
  reducers: {
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
      .addCase(requestTeamPlayers.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(requestTeamPlayers.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
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

export default playersSlice.reducer;
export const { filterPlayersList } = playersSlice.actions;
