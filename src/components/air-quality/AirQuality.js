import styles from "./airquality.module.css";
import { FaArrowRight } from "react-icons/fa";

const AirQuality = ({ data }) => {
  let aqi = [];
  switch (data.list[0].main.aqi) {
    case 1:
      aqi = ["good", "Good", "The air quality is healthy and fresh"];
      break;
    case 2:
      aqi = [
        "fair",
        "Fair",
        "The air quality is ideal for most individuals; enjoy your normal outdoor activities.",
      ];
      break;
    case 3:
      aqi = [
        "moderate",
        "Moderate",
        "The air quality is generally acceptable for most individuals. However, sensitive groups may experience minor to moderate symptoms from long-term exposure.",
      ];
      break;
    case 4:
      aqi = [
        "poor",
        "Poor",
        "The air has reached a high level of pollution and is unhealthy for sensitive groups. Reduce time spent outside if you are feeling symptoms such as difficulty breathing or throat irritation.",
      ];
      break;
    case 5:
      aqi = [
        "very-poor",
        "Very Poor",
        "Health effects can be immediately felt by sensitive groups. Healthy individuals may experience difficulty breathing and throat irritation with prolonged exposure. Limit outdoor activity.",
      ];
      break;
    default:
      break;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>AIR QUALITY</h2>
          <hr />
        </div>
        <div className={styles.detail}>
          <div className={styles.airquality}>
            <h1>
              {Math.round(data.list[0].components.pm2_5)}
              <span>
                PM<sub>25</sub>
              </span>
            </h1>
          </div>
          <div className={styles.description}>
            <h3 className={styles[aqi[0]]}>{aqi[1]}</h3>
            <p>{aqi[2]}</p>
            <a
              href="https://en.wikipedia.org/wiki/Air_quality_index#CAQI"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
              <FaArrowRight style={{ marginLeft: "5px" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirQuality;
