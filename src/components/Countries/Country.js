import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const { countryId } = useParams();
  const countries = useSelector((state) => state.countries);
  const country = countries[countryId];
  console.log(country);

  return (
    <div className="details-page">
      <div className="details-img">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="details-headings">
        <h1>{country.name.common}</h1>
        <h6>{`Population: ${country.population}`}</h6>
        <h6>{`Region: ${country.region}`}</h6>
        <h6>{`Subregion: ${country.subregion}`}</h6>

        {country.capital === undefined ? (
          <h6>{`Capital: No Capital`}</h6>
        ) : (
          <h6>{`Capital:${country.capital}`}</h6>
        )}
        <h6>{`Top Level Domain: ${country.tld}`}</h6>
      </div>
    </div>
  );
};

export default Country;
