import { createWeatherInfo, createWeatherDetails, createWeatherForecast, createSearch } from './dom.js'; 

/* PLACEHOLDER. WILL BE IN  API.JS LATER */
const weatherDetails = [
  {
    iconSrc: '',
    label: 'Feels like',
    data: '32 C'
  },
  {
    iconSrc: '',
    label: 'Humidity',
    data: '61 %'
  },
  {
    iconSrc: '',
    label: 'Chance of rain',
    data: '6 %'
  },
    {
    iconSrc: '',
    label: 'Wind speed',
    data: '18.5 km/h'
  }
]

createWeatherInfo();
createSearch();
createWeatherDetails(weatherDetails);



