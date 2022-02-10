import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [ready, setReady] = useState(false);
  function handleResponse(response) {
    setReady(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: 12,
      city: response.data.name,
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
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly cloudly</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="rainy"
            />
            <span className="temperature">{Math.round(temperature)}</span>
            <span className="units"> °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:72%</li>
              <li>Wind:13km/h</li>
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
