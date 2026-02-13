import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import CountryDetails from "./CountryDetails";

export default function CountriesComponent({ filteredCountries }) {
  const [details, setDetails] = useState(false);

  if (details) {
    return <CountryDetails />;
  }


  return (
    <main className="mx-auto flex max-w-7xl flex-wrap justify-between gap-12 px-5 py-5">
      {filteredCountries.map(({ capital, population, flags, name, region }) => (
        <CardComponent
          // onClick={() => setDetails(!details)}
          key={name.common}
          capital={capital[0]}
          population={population}
          flags={flags.svg}
          name={name.common}
          region={region}
        />
      ))}
    </main>
  );
}
