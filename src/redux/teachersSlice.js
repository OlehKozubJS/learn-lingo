import { createSlice } from "@reduxjs/toolkit";

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  extraReducers,
});

const teachers = teachersSlice.reducer;

export { teachers };
