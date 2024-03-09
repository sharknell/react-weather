import React, { useState, useEffect } from "react";
import { getWeatherByCoordinates } from "../../modules/weather/weather";
import getCurrentLocation from "../../modules/location/location";
import KakaoMap from "../../modules/map/map";
import "./current.css";

function Current() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    getCurrentLocation().then((location) => {
      const { latitude, longitude } = location;
      getWeatherByCoordinates(latitude, longitude).then((data) => {
        setWeather(data);
      });
    });
  }, []);

  useEffect(() => {
    if (weather) {
      const { lat, lon } = weather.coord;
      const container = document.getElementById("map");
      KakaoMap.renderMap(container, lat, lon);
    }
  }, [weather]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const icon = `/icons/${weather.weather[0].icon}.svg`;

  return (
    <div className="CLW-wrap">
      <div className="CLWContainer">
        <div className="title">
          <div>Current location</div>

          <div className="CLName">
            <span>{weather.name}</span>
          </div>
        </div>

        <div className="CLWContent">
          <div className="CLWTemper">
            <img src={process.env.PUBLIC_URL + icon} alt="not found" />
            <div className="CLWTemp">
              <span className="display">
                {weather.main.temp.toFixed(1)}°
                <i className="fa-solid fa-temperature-full"></i>
              </span>
              <br />
              <span className="display1">{weather.weather[0].description}</span>
            </div>
          </div>
          <div id='map'></div>
        </div>
      </div>
    </div>
  );
}

export default Current;
