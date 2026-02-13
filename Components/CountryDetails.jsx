import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Error from "./Error";

export default function CountryDetails() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const [singleCountry, setSingleCountry] = useState([]);
  const { country } = useParams();

  const [borders, setBorders] = useState("");
  console.log(borders);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => setSingleCountry(data))
      .catch(() => setSingleCountry({ error: "Please Enter a valid Country" }));
  }, [country]);

  if (singleCountry?.error) {
    return <Error message={singleCountry.error} />;
  }

  console.log(singleCountry);

  useEffect(() => {
    if (singleCountry.borders) {
      Promise.all(
        singleCountry.borders.map((co) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${co}`)
            .then((res) => res.json())
            .then(([data]) => data.name.common);
        }),
      ).then((borders) => {
        setBorders(borders);
      });
    }
  }, [singleCountry]);

  if (singleCountry.length === 0) {
    return <h3>Loading Details</h3>;
  }

  console.log(singleCountry.borders);

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-15 px-5">
      <div className="block">
        <button
          className="box-shadow flex w-24 cursor-pointer items-center justify-around rounded-xs p-1"
          onClick={() => history.back()}
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
      </div>

      <section className="flex gap-40">
        <div className="image-container box-shadow w-96 min-w-40">
          <img src={singleCountry.flags.svg} alt="" />
        </div>

        <div className="flex gap-18">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{singleCountry.name.common}</h1>
            <div className="space-y-3">
              <p>
                <b>Native Name: </b>
                {Object.values(singleCountry)[0].official}
              </p>
              <p>
                <b>Population:</b> {singleCountry.population}
              </p>
              <p>
                <b>Region: </b>
                {singleCountry.region}
              </p>
              <p>
                <b>Sub-Region: </b>
                {singleCountry.subregion}
              </p>
              <p>
                <b>Capita: </b>
                {singleCountry.capital
                  ? singleCountry.capital.join(", ")
                  : "No Official Capital"}
              </p>

              <div className="mt-12">
                <h1>
                  <b>Border Countries: </b>

                  {borders.length > 0
                    ? borders.map((bo) => (
                        <Link className="box-shadow p-1" to={`/${bo}`}>
                          {bo}
                        </Link>
                      ))
                    : "No Borders"}
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-3">
            <p>
              <b>Top Level Domain:</b> .np
            </p>
            <p>
              <b>Currencies</b>Rupee
            </p>
            <p>
              <b>Languages</b>Nepali
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
