import React, { useState } from 'react';
const api = {
  appid: "a0726456a2ff1d5376b2809e2fc075f3",
  base_url: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const options = [{value: "London", label: "London"},{value: "München", label: "München"}]

  const data = (city) => {
    if (city !== undefined) {
      fetch( `${api.base_url}forecast?q=${city}&units=metric&APPID=${api.appid}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          console.log(result);
        })
    }
  }

  return (
      <main>
        <div className="single-select">
          <select
          value={city}
          onChange={e => {data(e.target.value); setCity(e.target.value);
            setInterval(function(){ data(e.target.value); }, 10000);
          }}>
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        </div>
        {(typeof weather.list != "undefined") ? (
        <div>
        <div className="location-info">
          <div className="location-info__location">{city}</div>
          <div className="location-info__date">
            <h1>Date: </h1>
            {weather.list[0].dt_txt}
            </div>
        </div>
        <div className="weather-info">
          <div className="weather-info__temp">
            <h1>Temperature: </h1>
            {Math.round(weather.list[0].main.temp)}°c
          </div>
          <div className="weather-info__humidity">
          <h1>Humidity: </h1>
            {Math.round(weather.list[0].main.humidity)} %
          </div>
        </div>
      </div>
        ) : ('')}
      </main>
  );
}

export default App;