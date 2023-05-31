import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountrys } from "../../external/axios";
import Cookies from "js-cookie";
import { setCountryList } from "../dashboard/dashBoardSlice";
import { toast } from "react-toastify";

export const actionLogin = createAsyncThunk(
  "login/actionLogin",
  async (data: IData, { dispatch }) => {
    console.log(data.key);
    const response = await getCountrys(data.key);
    console.log("teste do country");
    dispatch(setCountryList(response.data.response));
    return { key: data.key };
  }
);

interface IData {
  key: string;
}

export interface ILoginState {
  authStatus: boolean;
  userKey: string;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ILoginState = {
  authStatus: false,
  userKey: "",
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
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
        console.log("teste conectado");
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
