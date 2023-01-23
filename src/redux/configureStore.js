import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import countriesReducer from "./Countries/Countries";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
