import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="search" className="btn btn-primary " />
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
          <span className="temperature">6</span>
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
}
