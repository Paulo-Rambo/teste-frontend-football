import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: true,
    error: null,
    countryList: [],
    filtredCountryList: [],
  },
  reducers: {
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
  extraReducers: () => {},
});

export default dashboardSlice.reducer;
export const { setCountryList, selectCountrys, filterCountryList } =
  dashboardSlice.actions;
