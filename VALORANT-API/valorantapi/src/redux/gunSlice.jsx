import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://valorant-api.com/v1/weapons";

export const getAllGuns = createAsyncThunk("guns/getAllGuns", async () => {
  const response = await axios.get(BASE_URL);
  return response.data.data;
});

const initialState = {
  guns: [],
};

export const gunSlice = createSlice({
  name: "guns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGuns.fulfilled, (state, action) => {
      state.guns = action.payload;
    });
  },
});

export default gunSlice.reducer;
