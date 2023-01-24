import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/Countries/Countries";

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
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <div className="country-data">
            <div>
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div>
              <h4>{country.name.common}</h4>
              <p>{country.population}</p>
              <p>{country.region}</p>
              <p>{country.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCountries;
