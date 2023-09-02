import "./App.css";
import "./index.css";
import React, { useContext } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import { WeatherContext } from "./context/WeatherContext";

function App() {
  const weather = useContext(WeatherContext);
  // console.log(weather);
  return (
    <div className="App">
      <h1>Weather report</h1>
      <Input />
      <Button onClick={weather.fetchData} title="Search" />
      <Card />
    </div>
  );
}

export default App;
