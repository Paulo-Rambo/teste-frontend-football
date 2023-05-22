import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../external/axios";
import Cookies from "js-cookie";

export const actionLogin = createAsyncThunk(
  "login/actionLogin",
  async (data) => {
    console.log(data);
    await loginUser(data.key);
    return data;
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

        console.log(`chave: ${action.payload.key}`);
        console.log(state.authStatus);
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
