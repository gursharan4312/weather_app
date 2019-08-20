import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function WeatherDisplay({ data }) {
  return (
    <div className="weather-container">
      <h2 className="city-name">{data.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        className="weather-icon"
      />
      <h2> {(data.main.temp - 273.15).toFixed(2)}&#176; C </h2>
      <h4 className="weather-description">{data.weather[0].description}</h4>
      <span>Humidity: {data.main.humidity}% &nbsp;</span>
      <span> Wind Speed:{data.wind.speed} m/sec</span>
    </div>
  );
}
