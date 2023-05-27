import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountrys } from "../../external/axios";
import Cookies from "js-cookie";
import { setCountryList } from "../dashboard/dashBoardSlice";
import { toast } from "react-toastify";

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
    loading: false,
    error: null,
  },
  reducers: {
    setUserCookie: (state, action) => {
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
        state.loading = true;
        state.error = null;
        console.log("pending");
      })
      .addCase(actionLogin.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.authStatus = true;
        state.userKey = action.payload.key;
        Cookies.set("api_sports_key", action.payload.key);
        toast.success("Conectado!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          theme: "colored",
        });
      })
      .addCase(actionLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error("Chave inválida!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          theme: "colored",
        });
      });
  },
});

export default loginSlice.reducer;
export const { setUserCookie, logoutUser } = loginSlice.actions;
