var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import debounce from "lodash.debounce";
import React, { useState, useCallback } from "react";
const AddressInput = ({ id = "addressInput", label, API_KEY, }) => {
    const [typeAheads, setTypeAheads] = useState([]);
    const [search, setSearch] = useState("");
    const debouncedSearch = useCallback(debounce((query) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("searching for", query);
        const data = yield getLngLatFromAddress(query, API_KEY);
        setTypeAheads(data);
    }), 500), []);
    const searchAddress = (e) => {
        const query = e.target.value;
        setSearch(query);
        if (!query)
            return setTypeAheads([]);
        debouncedSearch(query);
    };
    return (React.createElement("div", { className: "AddressInput" },
        label && React.createElement("label", { htmlFor: id }, label),
        React.createElement("input", { list: "list" + id, onChange: searchAddress, value: search, id: id, type: "text", placeholder: "Address" }),
        React.createElement("datalist", { id: "list" + id }, typeAheads.map((address, index) => {
            return React.createElement("option", { key: index, value: address.name });
        }))));
};
export default AddressInput;
export const getLngLatFromAddress = (address, mapboxToken) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        address +
        ".json?country=BE&language=NL&access_token=" +
        mapboxToken);
    const data = yield response.json();
    return data.features.map((f) => ({
        name: f.place_name_NL,
        lng: f.center[0],
        lat: f.center[1],
    }));
});
