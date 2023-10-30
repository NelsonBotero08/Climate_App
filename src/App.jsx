import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./componentes/WeatherCard";
import LoadingCard from "./componentes/LoadingCard";
import "./styles/LoadingCard.css";
import ErrorSuccess from "./componentes/ErrorSuccess";

function App() {
  const [weather, setWeather] = useState();
  const [coords, setCoords] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState();

  const success = (position) => {
    const obj = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    setCoords(obj);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, (error) => {
      setHasError(true);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (coords) {
      const APIKEY = "41ea3c21a1b372c8a23a83e7473c2e75";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
        )
        .then((res) => {
          setWeather(res.data);
          setHasError(false);
        })
        .catch((e) => {
          console.log(e);
          setHasError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [coords]);

  const inputCountry = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputCountry.current.value.toLowerCase().trim());
  };

  useEffect(() => {
    if (inputValue) {
      const APIKEY = "41ea3c21a1b372c8a23a83e7473c2e75";

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKEY}`
        )
        .then((res) => {
          setWeather(res.data);
          setHasError(false);
        })
        .catch((e) => {
          console.log(e);
          setHasError(true);
        })
        .finally(() => setIsLoading(false));
    }
  }, [inputValue]);

  return (
    <div className="app">
      {isLoading ? (
        <LoadingCard />
      ) : hasError ? (
        <ErrorSuccess />
      ) : (
        <div className="search">
          <form className="search__form" onSubmit={handleSubmit}>
            <input className="search__input" type="text" ref={inputCountry} />
            <div className="search__div--img">
              <i
                className="search__img"
                class="bx bx-search-alt"
                onClick={handleSubmit}
              ></i>
            </div>
          </form>
          <WeatherCard weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
