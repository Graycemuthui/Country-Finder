import { configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./Countries/Countries";

const store = configureStore({ reducer: countriesReducer });
export default store;
