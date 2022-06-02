import debounce from "lodash.debounce";
import React, { useState, useCallback, ChangeEvent, useRef } from "react";
import Map, {
  NavigationControl,
  Marker,
  GeolocateControl,
  AttributionControl,
} from "react-map-gl";

const MapWrapper = ({
  API_KEY,
  height = "400px",
  width = "100vw",
  mapStyle = "mapbox://styles/mapbox/streets-v11",
  mapProps = {},
}: {
  API_KEY: string;
  height?: string;
  width?: string;
  mapStyle?: string;
  mapProps?: { [key: string]: any };
}) => {
  const mapRef = useRef(null);
  return (
    <Map
      ref={mapRef}
      mapStyle={mapStyle}
      mapboxAccessToken={API_KEY}
      style={{ width, height }}
      {...mapProps}
    ></Map>
  );
};

export default MapWrapper;
