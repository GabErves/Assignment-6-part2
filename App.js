import React, { useState } from "react";
import "./App.css";

function App() {
  const initialCityState = { city: "", state: "" };
  const [cityState, setCityState] = useState(initialCityState);
  const [zipcode, setZipcode] = useState("");
  return (
    <div className="App">
      <h1>City/State Code Lookup Tool</h1>
      <h3>This program will find a specific zip code depending on the city/state you type in</h3>
      <h5>Make sure you type things in in all uppercase, as this program is case sensitve!</h5>
      <form action="" className="form-data">
        <label htmlFor="zip">Zip Code</label>
        <input
          className="zip"
          value={zipcode}
          placeholder="XXXXX"
          type="text"
          name="zip"
          id="zip"
        />
        <label htmlFor="city">Type a City here</label>
        <input
          className={`city`}
          value={cityState.city}
          type="text"
          name="city"
          disabled
          id="city"
        />
        <label htmlFor="state">Or type a State here</label>
        <input
          className={`state`}
          value={cityState.state}
          type="text"
          name="state"
          disabled
          id="state"
        />
      </form>
      <pre>
        <code>
          {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })}
        </code>
      </pre>
    </div>
  );
}

export default App;