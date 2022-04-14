import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDays">Thu</div>
          <div>
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
