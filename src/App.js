import AddressInput from "./lib/components/AddressInput";
import Map from "./lib/components/Map";
function App() {
  return (
    <div className="App">
      <AddressInput API_KEY="pk.eyJ1Ijoid2lzZWZvb2xzIiwiYSI6ImNsMTNlOGxjYTBmbjAzZHBka3VsZXFwbjUifQ.WzY-5zvqe12rrnp9NG_HeA"></AddressInput>
      <Map API_KEY="pk.eyJ1Ijoid2lzZWZvb2xzIiwiYSI6ImNsMTNlOGxjYTBmbjAzZHBka3VsZXFwbjUifQ.WzY-5zvqe12rrnp9NG_HeA"></Map>
    </div>
  );
}

export default App;
