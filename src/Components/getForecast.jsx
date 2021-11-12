import { useState } from "react";

const api = {
    appid: "6cb1772baa677bc26b4c8e8ad9699eb6",
    base_url: "https://api.openweathermap.org/data/2.5/",
  };

const getForecast = (city, setWeather) =>   {
    if (city !== undefined) {
        fetch(
          `${api.base_url}forecast?q=${city}&units=metric&APPID=${api.appid}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            console.log(result);
          });
      }
}

export default getForecast;