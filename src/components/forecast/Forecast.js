import styles from "./forecast.module.css";

const Forecast = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>FORECAST HOURLY</h2>
        <hr />
      </div>
      <div className={styles.forecast}>
        {data.list.slice(0, 5).map((item) => {
          const dateRaw = item.dt * 1000;
          const date = new Date(dateRaw);
          const dateOption = {
            weekday: "short",
            hour: "numeric",
            minute: "numeric",
            timeZone: "UTC",
          };
          const dateFormat = new Intl.DateTimeFormat(
            "en-GB",
            dateOption
          ).format(date);

          return (
            <>
              <div className={styles.day} key={date}>
                <p>{dateFormat}</p>
                <img
                  src={`../../../icons/${item.weather[0].icon}.png`}
                  alt="moon"
                ></img>
                <p>{Math.round(item.main.temp)} °C</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
