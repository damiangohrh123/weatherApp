import { getWeatherData } from './api.js';

const content = document.querySelector('.content');

const createWeatherInfo = () => {
  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');
  const weatherInfoDetails = document.createElement('div');
  weatherInfoDetails.classList.add('weatherInfoDetails');

  // Create weather decription
  const description = document.createElement('h2');
  description.setAttribute('id', 'description');

  // Create location
  const location = document.createElement('h1');
  location.setAttribute('id', 'location');

  // Create date
  const date = document.createElement('p');
  date.setAttribute('id', 'date');

  // Create temperature
  const temperature = document.createElement('p');
  temperature.setAttribute('id', 'temperature');

  // Create icon
  const icon = document.createElement('img');
  icon.setAttribute('id', 'weatherIcon');

  weatherInfoDetails.appendChild(location);
  weatherInfoDetails.appendChild(temperature);
  weatherInfoDetails.appendChild(description);
  weatherInfoDetails.appendChild(date);
  weatherInfo.appendChild(weatherInfoDetails);
  weatherInfo.appendChild(icon);

  content.appendChild(weatherInfo);
};

const createSearch = () => {
  const search = document.createElement('div');

  // Create search input
  const searchForm = document.createElement('form');
  searchForm.classList.add('searchForm');
  const searchInput = document.createElement('input');
  searchInput.classList.add('searchBar');
  searchInput.setAttribute = ('type', 'text');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchInput.value;
    getWeatherData(location);
    searchForm.reset();
  });

  searchForm.appendChild(searchInput);

  search.appendChild(searchForm);

  content.appendChild(searchForm);
};

const createWeatherDetails = (details) => {
  const weatherDetailsContainer = document.createElement('div');
  weatherDetailsContainer.classList.add('weatherDetailsContainer');

  // Create and append weather details
  for (let i = 0; i < details.length; i++) {
    const weatherDetails = document.createElement('div');
    weatherDetails.classList.add('weatherDetails');
    const icon = document.createElement('img');
    icon.src = details[i].iconSrc;
    icon.classList.add('weatherDetailsIcon');

    const weatherDetailsInfo = document.createElement('weatherDetailsInfo');
    const label = document.createElement('h3');
    label.textContent = details[i].label;
    const data = document.createElement('p');
    data.setAttribute('id', details[i].name);
    data.textContent = details[i].data;

    weatherDetails.appendChild(icon);
    weatherDetailsInfo.appendChild(label);
    weatherDetailsInfo.appendChild(data);
    weatherDetails.appendChild(weatherDetailsInfo)
    weatherDetailsContainer.appendChild(weatherDetails);
  }

  content.appendChild(weatherDetailsContainer);
};

const createWeatherForecast = () => {};

const backgroundChange = () => {
  if (isDay) {

  }
}


export {
  createWeatherInfo,
  createSearch,
  createWeatherDetails,
  createWeatherForecast,
};
