import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://valorant-api.com/v1/agents";

export const getAllAgents = createAsyncThunk(
  "agents/getAllAgents",
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  }
);

const initialState = {
  agents: [],
};

export const valorantSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAgents.fulfilled, (state, action) => {
      state.agents = action.payload;
    });
  },
});
export const { setSeletedgent } = valorantSlice.actions;

export default valorantSlice.reducer;
