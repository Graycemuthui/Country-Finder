import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/all";

const initialState = {
  countries: [],
  error: null,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return { ...state, countries: action.payload };
    case "FETCH_COUNTRIES_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL);
      dispatch({ type: "FETCH_COUNTRIES", payload: response.data });
      // console.log(response.data);
    } catch (error) {
      dispatch({ type: "FETCH_COUNTRIES_ERROR", payload: error });
    }
  };
};
