import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function Card() {
  const Weather = useContext(WeatherContext);
  console.log("data", Weather.weatherData);
  return (
    <div className="card">
      <img src={Weather?.weatherData?.current?.condition?.icon} alt="img" />
      <h1>{Weather.weatherData?.current?.temp_c} c</h1>
      <h3>{Weather.weatherData?.location?.country}</h3>
      <h4>{Weather.weatherData?.location?.region}</h4>
    </div>
  );
}
