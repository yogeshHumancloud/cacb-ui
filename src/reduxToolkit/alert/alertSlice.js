import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  color: "error",
};

export const alertSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.message = action.payload.message;
      state.color = action.payload.color;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
