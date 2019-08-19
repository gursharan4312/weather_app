import React, { useEffect } from "react";
import "./App.css";
import { Container } from "reactstrap";
import axios from "axios";

import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [location, setLocation] = React.useState({
    city: "",
    country: "",
    lon: "",
    lat: "",
    zip: ""
  });
  const [weatherData, setWeatherData] = React.useState({
    coord: {
      lon: -122.08,
      lat: 37.39
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }
    ],
    base: "stations",
    main: {
      temp: 296.71,
      pressure: 1013,
      humidity: 53,
      temp_min: 294.82,
      temp_max: 298.71
    },
    visibility: 16093,
    wind: {
      speed: 1.5,
      deg: 350
    },
    clouds: {
      all: 1
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200
  });
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
  // useEffect(() => {
  //   console.log(location);
  // });
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <WeatherForm
        location={location}
        setLocation={setLocation}
        onSubmit={onSubmit}
      />
      <div style={{ width: "80%" }} className="mx-auto">
        <WeatherDisplay data={weatherData} />
      </div>
    </Container>
  );
}

export default App;
