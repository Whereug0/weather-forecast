import Info from '../Info/Info';
import './App.scss';
import Menu from '../Menu/Menu';
import Activities from '../Activities/Activities';

import forecast from '../../assets/images/24hrs forecast.png';
import Content from '../Content/Content';
import { useEffect, useState } from 'react';



function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = "81a6006198b24e23874104833241903";
    const city = "London";
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    async function fetchWeather() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          console.log('Ошибка запроса');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchWeather();
    
    }, []);

    console.log(weatherData)
  return (
    <div className="App">
      {weatherData && weatherData.current.temp_c &&(
        <div className='info-wrapp'>
          <Info
            temp={Math.round(weatherData.current.temp_c) + "°C"}
            weather={weatherData.current.condition.text}
          />
          <img
            className="cloud-img"
            // src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt='icon'
          />
        </div>
      )}
      <div className='content-wrapp'>
        <Menu className="menu"/>
        <div className='content'>
          <Activities />
          <img className='forecast-img' src={forecast} alt='forecast'/>
        </div>
        <Content 
          feels={weatherData && weatherData.current ? weatherData.current.feelslike_c + "°" : ""}
          wind={weatherData && weatherData.current ? weatherData.current.wind_kph + " km/hr": ""}
          chanseOfRain={weatherData && weatherData.current ? weatherData.current.precip_mm + "%": ""}
          UVindex={weatherData && weatherData.current ? weatherData.current.uv : ""}
        />
      </div>
    </div>
  );
}

export default App;
