import axios from "axios";

// constant for action
const FETCH_COUNTRIES = "CountryFinder/Countries/fetchCountries";
// const SEARCH_COUNTRY = "./displayCountries/SEARCH_COUNTRY";
// const FILTER_COUNTRY = "./displayCounrties/FILTER_COUNTRY";
const BASE_URL = "https://restcountries.com/v3.1/all";

// reducer
export default function countriesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
}

// Action creator
export const fetchCountries = async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL);
    dispatch({
      type: FETCH_COUNTRIES,
      payload: response.data,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

// export const searchBook = (names) async(dispatch) => {
// await axios.filter((name) => {
// if (search === "") {
// return;
// }else if ()
// })
// }
