import { useEffect, useState } from "react";
import CountriesComponent from "./CountriesComponent";
import SearchAndFilter from "./SearchAndFilter";
import useSearchCountry from "../hooks/useSearchCountry";

export default function Home() {
  const [allCountriesArray, setAllCountriesArray] = useState([]);

  const [filteredCountries, setFilterCountry] =
    useSearchCountry(allCountriesArray);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population",
    )
      .then((response) => response.json())
      .then((data) => setAllCountriesArray(data));
  }, []);

  if (allCountriesArray.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <SearchAndFilter setFilterCountry={setFilterCountry} />
      <CountriesComponent filteredCountries={filteredCountries} />
    </>
  );
}
