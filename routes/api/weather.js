const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  res.send("Weather API");
});

router.post("/", (req, res) => {
  const { lon, lat, zip, city, country } = req.body;
  let url = "http://api.openweathermap.org/data/2.5/weather?";

  if (typeof city !== "undefined") {
    if (typeof country !== "undefined") url += `q=${city},${country}`;
    else url += `q=${city}`;
  } else if (typeof zip !== "undefined") {
    if (typeof country !== "undefined") url += `zip=${zip},${country}`;
    else url += `zip=${zip}`;
  } else if (typeof lat !== "undefined" && typeof lon !== "undefined") {
    url += `lat=${lat}&lon=${lon}`;
  }

  url += `&appid=${process.env.WEATHER_API}`;

  axios
    .get(url)
    .then(({ data }) => res.json(data))
    .catch(err => {
      res.json(err.response.data);
      throw err;
    });
});

module.exports = router;
