import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

const getTeachers = createAsyncThunk(
  `teachers/getTeachers`,
  async (params, thunkAPI) => {
    try {
      const { language, level, price, page } = params;
      const response = await axios.get(
        `http://localhost:3000/load/` +
          `?language=${language || "any language"}` +
          `&level=${level || "any level"}` +
          `&price=${price || "any price"}` +
          `&page=${page || 1}` +
          `&perPage=3`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { getTeachers };
