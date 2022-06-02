import React from "react";
import debounce from "lodash.debounce";

const AddressInput = ({ id = "addressInput", label, API_KEY }) => {
  const [typeAheads, setTypeAheads] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const debouncedSearch = React.useCallback(
    debounce(async (query) => {
      console.log("searching for", query);
      const data = await getLngLatFromAddress(query, API_KEY);
      setTypeAheads(data);
    }, 500),
    []
  );

  const searchAddress = (e) => {
    const query = e.target.value;

    setSearch(query);
    if (!query) return setTypeAheads([]);
    debouncedSearch(query);
  };

  return (
    <div className="AddressInput">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        list={"list" + id}
        onChange={searchAddress}
        value={search}
        id={id}
        type="text"
        placeholder="Address"
      />
      <datalist id={"list" + id}>
        {typeAheads.map((address) => {
          return <option value={address.name} />;
        })}
      </datalist>
    </div>
  );
};

export default AddressInput;

export const getLngLatFromAddress = async (address, mapboxToken) => {
  const response = await fetch(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      address +
      ".json?country=BE&language=NL&access_token=" +
      mapboxToken
  );
  const data = await response.json();

  return data.features.map((f) => ({
    name: f.place_name_NL,
    lng: f.center[0],
    lat: f.center[1],
  }));
};
