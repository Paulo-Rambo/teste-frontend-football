import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: true,
    error: null,
    countryList: [],
  },
  reducers: {
    setCountryList: (state, action) => {
      state.countryList = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: () => {},
});

export default dashboardSlice.reducer;
export const { setCountryList } = dashboardSlice.actions;
