import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../../redux/Countries/Countries";

export const DisplayCountries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h1>{country.name.common}</h1>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
      ))}
    </div>
  );
};
