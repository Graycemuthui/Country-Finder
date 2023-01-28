import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/Countries/Countries";
import { Link } from "react-router-dom";
import "./displayCountries.css";

const DisplayCountries = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    fetchCountries()().then = (data) =>
      console.log(data)(
        (dispatch({ type: "FETCH_COUNTRIES", payload: data }).catch = (error) =>
          dispatch({ type: "FETCH_COUNTRIES_ERROR", payload: error }))
      );
  }, [dispatch]);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="country-data">
      {countries.map((country, countryId) => (
        <div key={countryId}>
          <div className="country-details">
            <Link to={`/${countryId}`}>
              <div>
                <img src={country.flags.png} alt={country.name.common} />
              </div>
            </Link>
            <div className="country-features">
              <h4>{country.name.common}</h4>
              <h6>{`Population: ${country.population}`}</h6>
              <h6>{`Region: ${country.region}`}</h6>
              {country.capital === undefined ? (
                <h6>{`Capital: No Capital`}</h6>
              ) : (
                <h6>{`Capital:${country.capital}`}</h6>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCountries;
