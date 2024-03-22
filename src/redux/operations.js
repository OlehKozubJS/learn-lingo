import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
/*
const createThunk = (reducerName, thunkName, thunk) => {
  return createAsyncThunk(
    `${reducerName}/${thunkName}`,
    async (params, thunkAPI) => {
      try {
        await thunk(params);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
};
*/
const getTeachersThunk = async (params) => {
  const { language, level, price, page } = await params;
  const response = await axios.get(
    `http://localhost:3000/load/` +
      `?language=${language || "any language"}` +
      `&level=${level || "any level"}` +
      `&price=${price || "any price"}` +
      `&page=${page || 1}` +
      `&perPage=3`
  );
  return response.data;
};
/*
const getTeachers = createThunk("teachers", "getTeachers", getTeachersThunk);
*/
const getTeachers = createAsyncThunk(
  `teachers/getTeachers`,
  async (params, thunkAPI) => {
    try {
      const getTeachersThunk = async (params) => {
        const { language, level, price, page } = await params;
        const response = await axios.get(
          `http://localhost:3000/load/` +
            `?language=${language || "any language"}` +
            `&level=${level || "any level"}` +
            `&price=${price || "any price"}` +
            `&page=${page || 1}` +
            `&perPage=3`
        );
        return response.data;
      };
      await getTeachersThunk(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { getTeachers };
