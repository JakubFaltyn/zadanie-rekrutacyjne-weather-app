import { useState , useEffect} from "react";
import getForecast from "./getForecast";

const Forecast = ({city}) => {
    const [weather, setWeather] = useState({});

    getForecast(city, setWeather);
    
    useEffect(() =>{
      getForecast(city);
      console.log(city);
    },[])
    
    return (
        <div className="weather">
        {typeof weather.list !== "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.city.name}</div>
              <div className="date">{weather.list[0].dt_txt}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.list[0].main.temp)}°c</div>
              <div className="humidity">{Math.round(weather.list[0].main.humidity)}</div>
            </div>
          </div>
        ) : ("")}
    </div>
    )
}