import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeState: localStorage.getItem("theme"),
  },
  reducers: {
    themeData: (state) => {
      state.themeState = localStorage.getItem("theme");
    },
  },
});

// Action creators are generated for each case reducer function
export const { themeData } = themeSlice.actions;

export default themeSlice.reducer;
