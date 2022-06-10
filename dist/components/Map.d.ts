/// <reference types="react" />
declare const MapWrapper: ({ API_KEY, height, width, mapStyle, mapProps, }: {
    API_KEY: string;
    height?: string | undefined;
    width?: string | undefined;
    mapStyle?: string | undefined;
    mapProps?: {
        [key: string]: any;
    } | undefined;
}) => JSX.Element;
export default MapWrapper;
