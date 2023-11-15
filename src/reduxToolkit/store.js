import { configureStore } from "@reduxjs/toolkit";
import alert from "./alert/alertSlice";
import user from "./user/userSlice";

export const store = configureStore({
  reducer: {
    alert,
    user,
  },
});
