import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://valorant-api.com/v1/maps";

export const getAllMaps = createAsyncThunk("maps/getAllMaps", async () => {
  const response = await axios.get(BASE_URL);
  return response.data.data;
});

const initialState = {
  maps: [],
};

export const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMaps.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.maps = action.payload;
    });
  },
});

export default mapSlice.reducer;
