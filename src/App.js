import "./App.css";
import AirQuality from "./components/air-quality/AirQuality";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Search from "./components/search/Search";
import { OPENWEATHER_API_KEY, OPENWEATHER_API_URL } from "./Api";
import { useState } from "react";

function App() {
  const [currentweather, setCurrentWeather] = useState("");
  const [forecastWeather, setForecastWeather] = useState("");
  const [airQuality, setAirQuality] = useState("");

  const handlerOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");
    const currentweatherFetch = fetch(
      `${OPENWEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${OPENWEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`
    );
    const airQualityFetch = fetch(
      `${OPENWEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    );

    Promise.all([
      currentweatherFetch,
      forecastWeatherFetch,
      airQualityFetch,
    ]).then(async (response) => {
      const currentweatherRes = await response[0].json();
      const forecastWeatherRes = await response[1].json();
      const airQualityRes = await response[2].json();

      setCurrentWeather({ city: searchData.label, ...currentweatherRes });
      setForecastWeather({ city: searchData.label, ...forecastWeatherRes });
      setAirQuality({ city: searchData.label, ...airQualityRes });
    });
  };
  console.log(forecastWeather.list);
  return (
    <div className="container">
      <Search onSearchChange={handlerOnSearchChange} />
      {currentweather && <CurrentWeather data={currentweather} />}
      {airQuality && <AirQuality data={airQuality} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
