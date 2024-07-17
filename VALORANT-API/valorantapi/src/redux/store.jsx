import { configureStore } from "@reduxjs/toolkit";
import valorantReducer from "../redux/valorantSlice";
import mapReducer from "../redux/mapSlice";
import gunReducer  from '../redux/gunSlice'
export const store = configureStore({
  reducer: {
    agents: valorantReducer,
    maps: mapReducer,
    guns:gunReducer
  },
});
