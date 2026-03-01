import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

const Icon = ({WeatherIcon}) => {
  const weatherIcons = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightAltCloudy />,
    "03d": <WiCloud />,
    "03n": <WiCloud />,
    "04d": <WiCloudy />,
    "04n": <WiCloudy />,
    "09d": <WiRain />,
    "10d": <WiRain />,
    "11d": <WiThunderstorm />,
    "13d": <WiSnow />,
    "50d": <WiFog />,
  };
  console.log(WeatherIcon);

  return (
    <div className="flex justify-center p-4 border rounded-full m-9 text-white text-8xl">
            {weatherIcons[WeatherIcon]}  {/* ✅ works */}
    </div>
  );
};

export default Icon;
