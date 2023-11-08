import { configureStore } from "@reduxjs/toolkit";
import alert from "./alert/alertSlice";
export const store = configureStore({
  reducer: {
    alert,
  },
});
