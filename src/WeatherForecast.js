import axios from "axios";
import React from "react";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "b5a2d192f3a1859ed576767031687843";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDays">Thu</div>
          <div>
            {" "}
            <img
              className="img"
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="WeatherImage"
            />{" "}
          </div>
          <div className="WeatherTemperatures">
            <span className="MaxTemp">19°</span>/
            <span className="MinTemp">10°</span>
          </div>
        </div>

        <div className="col">
          <div className="ForecastDays">Thu</div>
          <div className="WeatherImages">
            {" "}
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="WeatherImage"
            />{" "}
          </div>
          <div className="WeatherTemperatures">
            <span className="MaxTemp">19°</span>/
            <span className="MinTemp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
