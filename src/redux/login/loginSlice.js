import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../external/axios";
import Cookies from "js-cookie";
import { continentsCountry } from "./dataCleaner";

export const actionLogin = createAsyncThunk(
  "login/actionLogin",
  async (data) => {
    console.log(data);
    const response = await loginUser(data.key);
    console.log(response.data.response);
    const newData = continentsCountry(response.data.response);
    return { key: data.key, country: newData };
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    authStatus: false,
    userKey: "",
    loading: true,
    error: null,
    country: {},
  },
  reducers: {
    setUserCookie: (state, action) => {
      state.userKey = action.payload.key;
      state.authStatus = true;
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
        state.country = action.payload.country;
        console.log(action.payload.country);
      })
      .addCase(actionLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Não foi possível logar");
      });
  },
});

export default loginSlice.reducer;
export const { setUserCookie } = loginSlice.actions;
