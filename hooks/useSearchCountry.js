import { useState } from "react";

export default function useSearchCountry(countriesArray) {
  const [filterCountry, setFilterCountry] = useState({
    country: "",
    region: "",
  });

  const filteredCountries = countriesArray.filter((country) => {
    return (
      country.name.common
        .toLowerCase()
        .includes(filterCountry.country.toLowerCase()) &&
      country.region.toLowerCase().includes(filterCountry.region.toLowerCase())
    );
  });

  return [filteredCountries, setFilterCountry];
}
