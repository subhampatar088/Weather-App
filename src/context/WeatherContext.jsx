import React, { createContext, useState } from "react";
import getWeatherData from "../api/weather";
export const WeatherContext = createContext(null);

export default function WeatherProvider(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const fetchData = async () => {
    // console.log(city);
    const data = await getWeatherData(city);
    setWeatherData(data);
  };
  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, fetchData }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
