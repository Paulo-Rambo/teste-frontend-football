import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPlayersByTeam } from "../../external/axios";
import { RootState } from "../store";

interface IPlayer {
  player: IPlayerData;
}

export interface IPlayerData {
  id: number | null;
  name: string;
  age: number | null;
  nationality: string | null;
  photo: string;
}

export interface IPlayerState {
  loading: boolean;
  error: string | null | undefined;
  selectedPlayersList: IPlayer[];
  filteredPlayersList: IPlayer[];
  notFound: boolean;
}

const initialState: IPlayerState = {
  loading: true,
  error: null,
  selectedPlayersList: [],
  filteredPlayersList: [],
  notFound: false,
};

export const requestTeamPlayers = createAsyncThunk(
  "players/requestTeamPlayers",
  async (teamId: number, { getState }) => {
    const { login, leagues }: RootState = getState() as RootState;
    const { userKey } = login;
    const { selectedYear } = leagues;
    const response = await getPlayersByTeam(userKey, teamId, selectedYear);
    return response.data;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    filterPlayersList: (state, action) => {
      const searchValue = action.payload;
      const list = state.selectedPlayersList;
      const newList = list.filter((obj: IPlayer) => {
        if (obj.player.name) {
          obj.player.name.toLowerCase().startsWith(searchValue.toLowerCase());
        }
      });
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

export default playersSlice.reducer;
export const { filterPlayersList } = playersSlice.actions;
