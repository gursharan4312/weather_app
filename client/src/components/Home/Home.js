import React from "react";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <WeatherForm
        location={location}
        setLocation={setLocation}
        onSubmit={onSubmit}
      />
      <div style={{ width: "80%" }} className="mx-auto">
        <WeatherContent data={weatherData} />
      </div>
    </Container>
  );
}
