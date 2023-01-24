import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/Countries/Countries";
import "./displayCountries.css";

const DisplayCountries = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  console.log(countries);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="country-data">
      {countries.map((country, index) => (
        <div key={index}>
          <div className="country-details">
            <div>
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="country-features">
              <h4>{country.name.common.sort}</h4>
              <h6>{`Population:` + country.population}</h6>
              <h6>{`Region:` + country.region}</h6>
              {country.capital === undefined ? (
                <h6>{`Capital:` + "No Capital"}</h6>
              ) : (
                <h6>{`Capital:` + country.capital}</h6>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCountries;
