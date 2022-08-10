import styles from "./currentweather.module.css";
import { FaTemperatureLow, FaWind } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";

const CurrentWeather = ({ data }) => {
  const dateRaw = (data.dt + data.timezone) * 1000;
  const date = new Date(dateRaw);

  const dateOpt = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <div className={styles.image}>
          <img
            src={`../../../icons/${data.weather[0].icon}.png`}
            alt="moon"
          ></img>
        </div>
        <div className={styles.detail}>
          <h2>{data.city}</h2>
          <h1>{Math.round(data.main.temp)} °C</h1>
          <p>{data.weather[0].main}</p>
        </div>
      </div>
      <div className={styles.dates}>
        {/* <p>Wednesday 27 July 2022 | Local Time 3:35 pm</p> */}
        <p>
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeZone: "UTC",
          }).format(date)}{" "}
          | Local Time{" "}
          {new Intl.DateTimeFormat("en-US", {
            timeStyle: "short",
            timeZone: "UTC",
          }).format(date)}
        </p>
      </div>
      <div className={styles.description}>
        <p>
          <FaTemperatureLow style={{ marginRight: "5px" }} />
          RealFeel: {Math.round(data.main.feels_like)} °C
        </p>
        <p>
          <FiDroplet style={{ marginRight: "5px" }} />
          Humidity: {data.main.humidity}%
        </p>
        <p>
          <FaWind style={{ marginRight: "5px" }} />
          Wind: {data.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
