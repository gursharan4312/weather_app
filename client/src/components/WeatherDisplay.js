import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function WeatherDisplay({ data }) {
  return (
    <Container className="weather-container">
      {data.cod === 200 ? (
        <>
          <Row className="weather-header my-4">
            <Col
              md={4}
              className="mx-auto"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <img
                src={`http://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@2x.png`}
                className="weather-icon"
              />
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={4}>
              <h2 style={{ textTransform: "uppercase" }}>
                {data.name},{data.sys.country}
              </h2>
              <h6>Lat:{data.coord.lat}</h6>
              <h6>Lon:{data.coord.lon}</h6>
            </Col>
            <Col md={4} />
            <Col md={4}>
              <h2>{data.weather[0].main}</h2>
              <h6>{data.weather[0].description}</h6>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <h4>Wind: {data.wind.speed} m/sec</h4>
              <h4>Pressure: {data.main.pressure} hPa</h4>
              <h4>Humidity: {data.main.humidity} %</h4>
            </Col>
            <Col md={4} />
            <Col md={4}>
              <h4>Temp: {data.main.temp} K</h4>
              <h4>Temp-max: {data.main.temp_max} K</h4>
              <h4>Temp-min: {data.main.temp_min} K</h4>
            </Col>
          </Row>
        </>
      ) : null}
    </Container>
  );
}
