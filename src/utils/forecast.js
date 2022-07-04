const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0d9fe0045b2459e393051a9eb19797cd&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " farenheit degrees out. It feels like " +
          body.current.feelslike +
          " farenheit degrees out." +
          "The humidity is " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;
