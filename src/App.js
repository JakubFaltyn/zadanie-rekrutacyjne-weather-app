import "./App.css";
import React, { useState, useEffect } from "react";
import Select from "./Components/Select";
import Forecast from "./Components/Select";

const api = {
  appid: "6cb1772baa677bc26b4c8e8ad9699eb6",
  base_url: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div className="App">
      <main>
        <Select setCity={setCity} city={city}/>
        <Forecast city={city}/>
      </main>
    </div>
  );
}

export default App;
