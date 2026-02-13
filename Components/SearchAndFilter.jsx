export default function SearchAndFilter({ setFilterCountry }) {
  return (
    <div className="SearchAndFilter">
      <div className="mx-auto my-11 flex max-w-7xl justify-between px-5">
        <div className="box-shadow flex w-87.5 items-center gap-2 rounded-sm px-4 py-4">
          <i className="fa-solid fa-magnifying-glass mr-3"></i>
          <input
            type="text"
            placeholder="Search for Country"
            className="w-full border-none text-sm outline-none"
            onChange={(e) =>
              setFilterCountry((prevState) => ({
                ...prevState,
                country: e.target.value,
              }))
            }
          />
        </div>
        <select
          className="box-shadow w-60 rounded-sm pl-2 outline-none"
          onChange={(e) =>
            setFilterCountry((prevState) => ({
              ...prevState,
              region: e.target.value,
            }))
          }
        >
          <option value="Select" hidden>
            Filter By Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
