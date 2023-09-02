import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function Input() {
  const weather = useContext(WeatherContext);
  return (
    <input
      className="input-field"
      placeholder="Search here"
      value={weather.city}
      onChange={(e) => weather.setCity(e.target.value)}
    />
  );
}
