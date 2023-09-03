// Import css styles
import './styles/styles.css';

// Import src
import Morning from './images/morningBackground.jpg';
import Night from './images/nightBackground.jpg';
import Rain from './images/rain.png';
import Humidity from './images/humidity.png'
import Thermometer from './images/thermometer.png';
import Wind from './images/wind.png';

// Import functions
import {
  createWeatherInfo,
  createWeatherDetails,
  createWeatherForecast,
  createSearch,
} from './dom.js';

/* PLACEHOLDER. WILL BE IN  API.JS LATER */
const weatherDetails = [
  {
    name: 'feelsLike',
    iconSrc: Thermometer,
    label: 'Feels like',
    data: '32 C',
  },
  {
    name: 'humidity',
    iconSrc: Humidity,
    label: 'Humidity',
    data: '61 %',
  },
  {
    name: 'chanceOfRain',
    iconSrc: Rain,
    label: 'Chance of rain',
    data: '6 %',
  },
  {
    name: 'windSpeed',
    iconSrc: Wind,
    label: 'Wind speed',
    data: '18.5 km/h',
  },
];


createWeatherInfo();
createSearch();
createWeatherDetails(weatherDetails);
