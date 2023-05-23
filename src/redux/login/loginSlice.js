import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, getCountrys } from "../../external/axios";
import Cookies from "js-cookie";
import { continentsCountry } from "./dataCleaner";
import { setCountryList } from "../dashboard/dashBoardSlice";

export const actionLogin = createAsyncThunk(
  "login/actionLogin",
  async (data, { dispatch }) => {
    console.log(data);
    const response = await getCountrys(data.key);
    console.log(response.data.response);
    dispatch(setCountryList(response.data.response));
    return { key: data.key };
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    authStatus: false,
    userKey: "",
    loading: true,
    error: null,
  },
  reducers: {
    setUserCookie: (state, action) => {
      state.userKey = action.payload.key;
      state.authStatus = true;
    },
    logoutUser: (state, action) => {
      state.authStatus = false;
      state.userKey = "";
      Cookies.remove("api_sports_key");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionLogin.pending, (state) => {
        state.loadingList = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(actionLogin.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.authStatus = true;
        state.userKey = action.payload.key;
        Cookies.set("api_sports_key", action.payload.key);
      })
      .addCase(actionLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Não foi possível logar");
      });
  },
});

export default loginSlice.reducer;
export const { setUserCookie, logoutUser } = loginSlice.actions;
