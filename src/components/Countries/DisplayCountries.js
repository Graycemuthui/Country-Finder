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
      {Object.keys(countries).map((country, index) => (
        <div key={index}>
          <div>
            <h1>{country.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCountries;
