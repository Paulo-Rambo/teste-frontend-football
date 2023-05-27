import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLeagues } from "../../external/axios";

export const requestLeagues = createAsyncThunk(
  "leagues/requestLeagues",
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

const leaguesSlice = createSlice({
  name: "leagues",
  initialState: {
    loading: true,
    error: null,
    leagueBySeasonAndCountryList: [],
    selectedYear: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default leaguesSlice.reducer;
export const {} = leaguesSlice.actions;
