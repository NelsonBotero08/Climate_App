import React, { useState } from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const celsius = (weather?.main.temp - 273.15).toFixed(1);
  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);

  const tem_max = (weather?.main.temp_max - 273.15).toFixed(1);
  const tem_min = (weather?.main.temp_min - 273.15).toFixed(1);

  const [isCelsius, setIsCelsius] = useState(true);

  const handleChange = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <article className="weather">
      <h1 className="weather__title">Weather App</h1>
      <h2 className="weather__location">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <section className="weather__body">
        <header className="weather__img--container">
          <img
            className="weather__img"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt=""
          />
        </header>
        <article className="weather__info">
          <h3 className="weather__condition">
            "{weather?.weather[0].description}"
          </h3>
          <ul className="weather__list">
            <li className="weather__item">
              <span className="weather__label">Wind Speed</span>
              <span className="weather__value">{weather?.wind.speed}m/s</span>
            </li>
            <li className="weather__item">
              <span className="weather__label">Clouds</span>
              <span className="weather__value">{weather?.clouds.all}%</span>
            </li>
            <li className="weather__item">
              <span className="weather__label">Pressure</span>
              <span className="weather__value">
                {weather?.main.pressure}hPa
              </span>
            </li>
          </ul>
        </article>
      </section>
      <div className="weather__temp__div">
        <div className="weather__max">
          <p className="weather__max-min">Temp_max</p>
          <p className="weather__max-min">{tem_max} °C</p>
        </div>
        <h2 className="weather__temp">
          {isCelsius ? `${celsius} °C` : `${fahrenheit} °F`}
        </h2>
        <div className="weather__min">
          <p className="weather__max-min">Temp_min</p>
          <p className="weather__max-min">{tem_min} °C</p>
        </div>
      </div>
      <button className="weather__btn" onClick={handleChange}>
        change {isCelsius ? "°F" : "°C"}
      </button>
    </article>
  );
};

export default WeatherCard;
