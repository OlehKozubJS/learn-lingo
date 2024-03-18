import { createSlice } from "@reduxjs/toolkit";

import {} from "./operations";

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
    []
  },
});

const teachers = teachersSlice.reducer;

export { teachers };
