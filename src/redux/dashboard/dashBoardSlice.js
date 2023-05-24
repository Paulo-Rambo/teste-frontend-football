import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSeasons, getLeagues } from "../../external/axios";

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
    console.log(response);
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
      console.log(action.payload);
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
      });
  },
});

export default dashboardSlice.reducer;
export const {
  setCountryList,
  selectCountrys,
  filterCountryList,
  setTeamName,
} = dashboardSlice.actions;
