"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLngLatFromAddress = exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressInput = _ref => {
  let {
    id = "addressInput",
    label,
    API_KEY
  } = _ref;

  const [typeAheads, setTypeAheads] = _react.default.useState([]);

  const [search, setSearch] = _react.default.useState("");

  const debouncedSearch = _react.default.useCallback((0, _lodash.default)(async query => {
    console.log("searching for", query);
    const data = await getLngLatFromAddress(query, API_KEY);
    setTypeAheads(data);
  }, 500), []);

  const searchAddress = e => {
    const query = e.target.value;
    setSearch(query);
    if (!query) return setTypeAheads([]);
    debouncedSearch(query);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "AddressInput"
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    list: "list" + id,
    onChange: searchAddress,
    value: search,
    id: id,
    type: "text",
    placeholder: "Address"
  }), /*#__PURE__*/_react.default.createElement("datalist", {
    id: "list" + id
  }, typeAheads.map(address => {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: address.name
    });
  })));
};

var _default = AddressInput;
exports.default = _default;

const getLngLatFromAddress = async (address, mapboxToken) => {
  const response = await fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?country=BE&language=NL&access_token=" + mapboxToken);
  const data = await response.json();
  return data.features.map(f => ({
    name: f.place_name_NL,
    lng: f.center[0],
    lat: f.center[1]
  }));
};

exports.getLngLatFromAddress = getLngLatFromAddress;