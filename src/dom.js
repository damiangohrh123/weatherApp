import { getWeatherData } from './api.js';

import GithubLogo from './images/githublogo.png';

const content = document.querySelector('.content');

const createWeatherInfo = () => {
  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weatherInfo');
  const weatherInfoDetails = document.createElement('div');
  weatherInfoDetails.classList.add('weatherInfoDetails');
  const weatherInfoIcon = document.createElement('div');
  weatherInfoIcon.classList.add('weatherInfoIcon');

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
  weatherInfoDetails.appendChild(date);
  weatherInfoIcon.appendChild(icon);
  weatherInfoIcon.appendChild(description);
  weatherInfo.appendChild(weatherInfoDetails);
  weatherInfo.appendChild(weatherInfoIcon);

  content.appendChild(weatherInfo);
};

const createSearch = () => {
  const search = document.createElement('div');

  // Create search input
  const searchForm = document.createElement('form');
  searchForm.classList.add('searchForm');
  const searchInput = document.createElement('input');
  searchInput.classList.add('searchBar');
  searchInput.placeholder = 'Search for country, city, etc.'
  searchInput.setAttribute = ('type', 'text');
  const errorMsg = document.createElement('span');
  errorMsg.classList.add('errorMsg', 'errorMsgHidden');
  errorMsg.textContent = 'No matching location found!';

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchInput.value;
    getWeatherData(location);
    searchForm.reset();
  });

  searchForm.appendChild(searchInput);
  searchForm.appendChild(errorMsg);

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
    weatherDetails.appendChild(weatherDetailsInfo);
    weatherDetailsContainer.appendChild(weatherDetails);
  }

  content.appendChild(weatherDetailsContainer);
};

const createHourlyForecast = () => {
  const hourlyForecastContainer = document.createElement('div');
  hourlyForecastContainer.classList.add('hourlyForecastContainer');

  // Create and append weather forecast for next 6 hours
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.classList.add('hourlyForecast');

    const time = document.createElement('p');
    time.setAttribute('id', `hourlyForecastTime${i}`);
    const icon = document.createElement('img');
    icon.setAttribute('id', `hourlyForecastIcon${i}`);
    const temperature = document.createElement('p');
    temperature.classList.add('hourlyForecastTemperature');
    temperature.setAttribute('id', `hourlyForecastTemperature${i}`);

    card.appendChild(time);
    card.appendChild(icon);
    card.appendChild(temperature);

    hourlyForecastContainer.appendChild(card);
  }
  content.appendChild(hourlyForecastContainer);
};

const createDailyForecast = () => {
  const dailyForecastContainer = document.createElement('div');
  dailyForecastContainer.classList.add('dailyForecastContainer');

  // Create and append daily forecast elements for today + next 6 days
  for (let i = 0; i < 7; i++) {
    const card = document.createElement('div');
    card.classList.add('dailyForecast');

    const day = document.createElement('p');
    day.classList.add('dailyForecastDay');
    day.setAttribute('id', `dailyForecastDay${i}`); 

    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('conditionContainer');
    const icon = document.createElement('img');
    icon.setAttribute('id', `dailyForecastIcon${i}`);
    const condition = document.createElement('p');
    condition.setAttribute('id', `condition${i}`);

    const temperatureContainer = document.createElement('div');
    const temperatureMin = document.createElement('p');
    temperatureMin.setAttribute('id', `temperatureMin${i}`);
    const temperatureMax = document.createElement('p');
    temperatureMax.setAttribute('id', `temperatureMax${i}`);

    conditionContainer.appendChild(icon);
    conditionContainer.appendChild(condition);
    temperatureContainer.appendChild(temperatureMin);
    temperatureContainer.appendChild(temperatureMax);

    card.appendChild(day);
    card.appendChild(conditionContainer);
    card.appendChild(temperatureContainer);

    dailyForecastContainer.appendChild(card);
  }
  content.appendChild(dailyForecastContainer);
}

const throwErrorMsg = () => {
  const error = document.querySelector('.errorMsg');
  error.classList.add('errorMsgActive');
  error.classList.remove('errorMsgHidden');
}

const removeErrorMsg = () => {
  const error = document.querySelector('.errorMsg');
  error.classList.remove('errorMsgActive');
  error.classList.add('errorMsgHidden');
}

const watermark = () => {
  const container = document.createElement('div');
  container.classList.add('watermark');
  const madeByText = document.createTextNode('Made by: ');

  const link = document.createElement('a');
  link.href = 'https://github.com/damiangohrh123';

  const logo = document.createElement('img');
  logo.classList.add('githubLogo');
  logo.src = GithubLogo;
  logo.alt = 'git hub logo';

  const name = document.createTextNode(' Damian');

  link.appendChild(logo);
  link.appendChild(name);

  container.appendChild(madeByText);
  container.appendChild(link);

  content.appendChild(container);
}

export {
  createWeatherInfo,
  createSearch,
  createWeatherDetails,
  createHourlyForecast,
  createDailyForecast,
  throwErrorMsg,
  removeErrorMsg,
  watermark
};
