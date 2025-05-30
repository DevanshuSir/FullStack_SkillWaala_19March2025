import React, { useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");

  const api_key = "e10e48cd5c1df35f6da8d75df73a8bb5";

  const handleWeather = async function () {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );

      if (!response.ok) throw new Error("City Not Found ❌");
      const record = await response.json();
      setWeather(record);
      console.log(record);
    } catch (error) {
      setWeather(null);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-bgimage bg-cover bg-no-repeat flex flex-col items-center justify-center ">
      <div
        className="w-full max-w-md bg-black bg-opacity-50 rounded-3xl
      shadow-2xl p-7 text-white "
      >
        <h1 className="text-4xl font-bold text-center tracking-wide mb-7">
          🌎 Weather Forecast
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            name=""
            id=""
            className="p-3 rounded-xl text-black focus:outline-none shadow-inner"
            placeholder="Enter City Name..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleWeather()}
            list="city"
          />

          <datalist id="city">
            <option value="Jaipur"></option>
            <option value="Ajmer"></option>
            <option value="Goa"></option>
          </datalist>

          <button
            className="bg-white text-indigo-600 font-bold py-2 rounded-xl hover:bg-indigo-600 hover:text-white"
            onClick={handleWeather}
          >
            🔍 Search Weather{" "}
          </button>

          {error && <p className="text-center text-red-600">{error}</p>}

          {weather && (
            <div className="text-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
                className="mx-auto w-32 h-32 object-contain"
              />
              <h2 className="text-3xl font-bold">
                {weather.name}/{weather.sys.country}
              </h2>
              <p className="text-xl">{weather.weather[0].description}</p>
              <p className="text-5xl font-bold mt-2">{weather.main.temp} °C</p>
            </div>
          )}
        </div>
        {weather && (
          <div className="grid grid-cols-3 gap-2 text-white text-sm text-center mt-7">
            <div className="bg-black opacity-90 rounded-xl p-2">
              <p className="text-bold">Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="bg-black opacity-90 rounded-xl p-2">
              <p className="text-bold">Wind</p>
              <p>{weather.wind.speed} m/s</p>
            </div>
            <div className="bg-black opacity-90 rounded-xl p-2">
              <p className="text-bold">Clouds</p>
              <p>{weather.clouds.all}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
