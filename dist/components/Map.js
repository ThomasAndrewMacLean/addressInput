import React, { useRef } from "react";
import Map from "react-map-gl";
const MapWrapper = ({ API_KEY, height = "400px", width = "100vw", mapStyle = "mapbox://styles/mapbox/streets-v11", mapProps = {}, }) => {
    const mapRef = useRef(null);
    return (React.createElement(Map, Object.assign({ ref: mapRef, mapStyle: mapStyle, mapboxAccessToken: API_KEY, style: { width, height } }, mapProps)));
};
export default MapWrapper;
