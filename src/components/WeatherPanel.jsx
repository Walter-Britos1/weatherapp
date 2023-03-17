import { useState } from "react";
import Form from './Form.jsx';
import Card from './Card.jsx';

const apiKey = 'c907e9d3d3ecc32fd4e410208d45cf21'

const WeatherPanel = () => {

  let urlWeather = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&lang=es`;
  let urlCiudad =  '&q=';
  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?&appid=${apiKey}&lang=es`;


  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');


  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    // weather

    urlWeather = `${urlWeather} ${urlCiudad} ${loc}` 

    await fetch(urlWeather)
    .then(response => {
      if (!response.ok) throw {response}
      return response.json();
    }).then(weatherData => {
      console.log(weatherData);
      setWeather(weatherData);
    }).catch(err => {
      console.log(err);
      setLoading(false);
      setShow(false);
    });

    // forecast

    urlForecast = urlForecast + urlCiudad + loc

    await fetch(urlForecast)
    .then(response => {
      if (!response.ok) throw {response}
      return response.json();
    }).then(forecastData => {
      console.log(forecastData);
      setForecast(forecastData);

      setLoading(false);
      setShow(true);



    }).catch(err => {
      console.log(err);
      setLoading(false);
      setShow(false);
    });
  };


  return (
   <>
     <Form 
      newLocation={getLocation}
     />
     <Card 
      showData={show}
      loadingData={loading}
      weather={weather}
      forecast={forecast}
     />
   </>
  );
};


export default WeatherPanel;