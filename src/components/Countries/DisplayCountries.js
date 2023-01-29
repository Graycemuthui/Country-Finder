import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/Countries/Countries";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DisplayCountries.css";

const DisplayCountries = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const countries = useSelector((state) => state.countries);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={search.get("filter") || ""}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
      </div>
      <div className="country-data">
        {countries
          .filter((country) => {
            const filter = search.get("filter");
            if (!filter) {
              return true;
            }
            return country.name.common
              .toLowerCase()
              .includes(filter.toLowerCase());
          })
          .map((country, countryId) => (
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
    </>
  );
};

export default DisplayCountries;
