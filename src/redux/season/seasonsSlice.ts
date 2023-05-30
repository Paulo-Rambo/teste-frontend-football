import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSeasons } from "../../external/axios";
import RootState from "../../interfaces/types";

export const requestSeasons = createAsyncThunk(
  "seasons/requestSeasons",
  async (_, { getState }) => {
    const { login }: RootState = getState() as RootState;
    const { userKey } = login;
    console.log(userKey);
    const response = await getSeasons(userKey);

    return response.data;
  }
);

export interface ISeasonState {
  loading: boolean;
  error: string | null | undefined;
  seasonList: number[];
}

const initialState: ISeasonState = {
  loading: true,
  error: null,
  seasonList: [],
};

const seasonsSlice = createSlice({
  name: "seasons",
  initialState,
  reducers: {},
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
      });
  },
});
export default seasonsSlice.reducer;
