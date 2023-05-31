import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICountry {
  code: string;
  flag: string;
  name: string;
}

export interface IDashboardState {
  loading: boolean;
  error: string | null;
  countryList: ICountry[];
  filtredCountryList: ICountry[];
  selectedCountry: string;
}

const initialState: IDashboardState = {
  loading: true,
  error: null,
  countryList: [],
  filtredCountryList: [],
  selectedCountry: "",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTeamName: (state, action: PayloadAction<string>) => {
      state.selectedCountry = action.payload;
      return;
    },
    setCountryList: (state, action: PayloadAction<ICountry[]>) => {
      let newList = action.payload;
      const newListIndice = action.payload.findIndex(
        (obj) => obj.name === "World"
      );
      if (newListIndice !== -1) {
        newList.splice(newListIndice, 1);
      }
      state.countryList = newList;
      state.filtredCountryList = newList;
      console.log(state.filtredCountryList);
      console.log(state.countryList);
    },
    filterCountryList: (state, action) => {
      const searchValue = action.payload;
      const list = state.countryList;
      const newList = list.filter((country) => {
        return country.name.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      state.filtredCountryList = newList;
    },
  },
});

export default dashboardSlice.reducer;
export const { setCountryList, filterCountryList, setTeamName } =
  dashboardSlice.actions;
