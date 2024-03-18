import { createSlice } from "@reduxjs/toolkit";

import { getTeachers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getTeachers.pending, handlePending);
    builder.addCase(getTeachers.rejected, handleRejected);
    builder.addCase(getTeachers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.teachersData = action.payload;
    });
  },
});

const teachers = teachersSlice.reducer;

export { teachers };
