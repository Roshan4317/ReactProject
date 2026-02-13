import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

export default function CardComponent({
  capital,
  population,
  flags,
  name,
  region,
  onClick,
}) {
  return (
    <section className="">
      <div className="card box-shadow w-63" onClick={onClick}>
        <Link to={`${name}`}>
          <div className="w-full">
            <img src={flags} alt={name} />
          </div>

          <div className="px-4 py-3">
            <p className="py-2 text-2xl font-medium">{name}</p>
            <p>
              <b className="font-medium">Population:</b>
              {population}
            </p>
            <p>
              <b className="font-medium">Region:</b> {region}
            </p>
            <p>
              <b className="font-medium">Capital:</b> {capital}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
