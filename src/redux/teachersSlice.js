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
    teachersList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getTeachers.pending]: handlePending,
    [getTeachers.rejected]: handleRejected,
    [getTeachers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.teachersList = action.payload;
    },
  },
});

const teachers = teachersSlice.reducer;

export { teachers };
