import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

import WeatherForm from "./components/Forms/WeatherForm";
import WeatherContent from "./components/WeatherContent/WeatherContent";
import data from "./default";

function App() {
  const [location, setLocation] = React.useState({
    city: "",
    country: "",
    lon: "",
    lat: "",
    zip: ""
  });
  const [weatherData, setWeatherData] = React.useState(data);

  const onSubmit = () => {
    axios
      .post("/api/weather", location)
      .then(({ data }) => {
        setWeatherData(data);
        return true;
      })
      .catch(err => {
        return false;
      });
  };
  return (
    <div className="main-container">
      <div className="header">
        <h1>Weather App</h1>
      </div>
      <div className="form">
        <WeatherForm
          location={location}
          setLocation={setLocation}
          onSubmit={onSubmit}
        />
      </div>
      <div className="main-content">
        <WeatherContent data={weatherData} />
      </div>
    </div>
  );
}

export default App;
