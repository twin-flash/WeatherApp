import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsWater } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
const Weather = ({ weatherData }) => {
  return (
    <div className="text-center">
      {/* Weather Main Icon */}

      <div>
        <div className="text-white text-5xl font-light">
          {weatherData?.temperature}
          <span className="font-extralight">°c</span>
        </div>
        <div className="text-white text-3xl">{weatherData?.location}</div>
      </div>

      <div className="border my-5 border-white rounded-xl">

        {/* ---Humidity--- */}

        <div className="flex text-white justify-between m-5">
          <div className="flex items-center gap-3">
            <BsWater className="text-4xl text-blue-300" />
            <div className="flex flex-col">
              <span className="text-2xl">
                {weatherData?.humidity ?? "--"}

                <span className="text-sm font-normal text-gray-300 ml-1">
                  %
                </span>
              </span>
              <p className="text-sm text-gray-300 font-light">Humidity</p>
            </div>
          </div>

          {/* ---WindSpeed--- */}

          <div className="flex items-center gap-3">
            <FiWind className="text-4xl text-blue-300" />
            <div className="flex flex-col">
              <span className="text-2xl">
                {weatherData?.windspeed}
                <span className="text-sm font-normal text-gray-300 ml-1">
                  km/h
                </span>
              </span>
              <p className="text-sm text-gray-300 font-light">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
