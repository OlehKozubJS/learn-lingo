import { configureStore } from "@reduxjs/toolkit";

import { persistReducers, middleware, persistStore } from "./persistor";

import { teachers } from "./teachersSlice";

const store = configureStore({ reducer: { teachers }, middleware });

export { store };
