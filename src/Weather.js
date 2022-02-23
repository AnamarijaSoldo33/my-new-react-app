import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [ready, setReady] = useState(false);
  function handleResponse(response) {
    setReady(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      date: new Date(response.date.dt * 1000),
    });
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form.control "
                autoFocus="on"
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
          <li>
            <FormattedDate date={weather.date} />
          </li>
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
      </div>
    );
  } else {
    let city = "New York";
    let apiKey = "b5a2d192f3a1859ed576767031687843";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
