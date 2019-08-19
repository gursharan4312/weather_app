import React from "react";
import { Container } from "reactstrap";

export default function WeatherDisplay({ data }) {
  return (
    <Container>
      {data.cod === 200 ? (
        <>
          <h1>City:{data.name}</h1>
          <h1>Country:{data.sys.country}</h1>
          <h4>Coordinates:</h4>
          <ul>
            <li>Lat:{data.coord.lat}</li>
            <li>Lon:{data.coord.lon}</li>
          </ul>
          <h4>Weather</h4>
          <ul>
            <li>Main:{data.weather[0].main}</li>
            <li>Description:{data.weather[0].description}</li>
            <li>Temp:{data.main.temp}</li>
            <li>Temp-max:{data.main.temp_max}</li>
            <li>Temp-min:{data.main.temp_min}</li>
            <li>Pressure:{data.main.pressure}</li>
            <li>Humidity:{data.main.humidity}</li>
          </ul>
          <h4>Wind:</h4>
          <ul>
            <li>Speed:{data.wind.speed}</li>
          </ul>
        </>
      ) : null}
    </Container>
  );
}
