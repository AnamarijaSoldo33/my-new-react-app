import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({});
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setReady(true);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "b5a2d192f3a1859ed576767031687843";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form.control "
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="search"
                className="btn btn-primary "
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="units"> °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{weather.humidity}%</li>
              <li>Wind:{Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
