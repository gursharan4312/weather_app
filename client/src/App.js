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
    sys: "",
    weather: [{ main: "" }],
    coord: "",
    main: "",
    wind: "",
    cod: 0
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
      <WeatherDisplay data={weatherData} />
    </Container>
  );
}

export default App;
