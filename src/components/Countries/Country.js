import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Country = () => {
  const { countryId } = useParams();

  const s = useSelector((state) => state);
  console.log(s);
  return (
    <div>
      {/* <div key={country.id}>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.name.common} />
      </div> */}
    </div>
  );
};

export default Country;
