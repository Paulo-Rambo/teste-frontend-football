import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: true,
    error: null,
    countryList: [],
    filtredCountryList: [],
    selectedCountry: "",
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
});

export default dashboardSlice.reducer;
export const { setCountryList, filterCountryList, setTeamName } =
  dashboardSlice.actions;
