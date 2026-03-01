import React, { useState, useEffect, useRef } from "react";
import Weather from "./components/Weather";
import Search from "./components/Search";
import Icon from "./components/Icon";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = ({}) => {
  const [weatherData, setWeatherData] = useState();
  const VITE_APP_ID = import.meta.env.VITE_APP_ID;
  const search = async (city) => {
    if (!city) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      const icon = data.weather[0].icon || "01d";
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData({
        humidity: "--",
        windspeed: "--",
        temperature: "--",
        location: "Not Found",
        icon: "01d",
      });
    }
    inputRef.current.value = "";
  };
  useEffect(() => {
    search("chennai");
  }, []);
  const inputRef = useRef(null);
  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-300 via-blue-500 to-indigo-700 flex justify-center items-start">
      <div className="w-full max-w-md mx-auto px-4 py-8 flex flex-col">
        <Header/>
        <Search search={search} inputRef={inputRef} />
        <Icon WeatherIcon={weatherData?.icon} />
        <Weather weatherData={weatherData} />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
