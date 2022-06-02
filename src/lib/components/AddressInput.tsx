import debounce from "lodash.debounce";
import React, { useState, useCallback, ChangeEvent } from "react";

const AddressInput = ({
  id = "addressInput",
  label,
  API_KEY,
}: {
  id: string;
  label: string;
  API_KEY: string;
}) => {
  const [typeAheads, setTypeAheads] = useState<
    { name: string; lng: number; lat: number }[]
  >([]);
  const [search, setSearch] = useState("");

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      console.log("searching for", query);
      const data = await getLngLatFromAddress(query, API_KEY);
      setTypeAheads(data);
    }, 500),
    []
  );

  const searchAddress = (e: ChangeEvent<HTMLInputElement>) => {
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
        {typeAheads.map((address, index) => {
          return <option key={index} value={address.name} />;
        })}
      </datalist>
    </div>
  );
};

export default AddressInput;

export const getLngLatFromAddress = async (
  address: string,
  mapboxToken: string
) => {
  const response = await fetch(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      address +
      ".json?country=BE&language=NL&access_token=" +
      mapboxToken
  );
  const data = await response.json();

  return data.features.map(
    (f: { center: number[]; place_name_NL: string }) => ({
      name: f.place_name_NL,
      lng: f.center[0],
      lat: f.center[1],
    })
  );
};
