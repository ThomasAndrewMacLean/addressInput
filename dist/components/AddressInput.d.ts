/// <reference types="react" />
declare const AddressInput: ({ id, label, API_KEY, }: {
    id: string;
    label: string;
    API_KEY: string;
}) => JSX.Element;
export default AddressInput;
export declare const getLngLatFromAddress: (address: string, mapboxToken: string) => Promise<any>;
