import { getWeatherData, processData } from './api.js';

const content = document.querySelector('.content');

const createWeatherInfo = () => {
  const weatherInfo = document.createElement('div');

  // Create weather decription
  const description = document.createElement('h1');
  description.textContent = 'Singapore';

  // Create location
  const location = document.createElement('p');
  location.textContent = 'Bedok, Singapore';

  // Create date
  const date = document.createElement('p');
  date.textContent = new Date();

  // Create temperature
  const temperature = document.createElement('p');
  temperature.textContent = '32 C';

  // Create icon
  const icon = document.createElement('img');
  icon.src = '';
  
  weatherInfo.appendChild(description);
  weatherInfo.appendChild(location);
  weatherInfo.appendChild(date);
  weatherInfo.appendChild(temperature);
  weatherInfo.appendChild(icon);

  content.appendChild(weatherInfo);
}

const createSearch =() => {
  const search = document.createElement('div');

  // Create search input
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  searchInput.setAttribute = ('type', 'text');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchInput.value;
    getWeatherData(location);
    searchForm.reset();
  });

  searchForm.appendChild(searchInput)

  search.appendChild(searchForm);

  content.appendChild(searchForm);
} 

const createWeatherDetails = (details) => {
  const weatherDetails = document.createElement('div');

  // Create and append weather details
  for (let i =0; i < details.length; i++) {
    const icon = document.createElement('img');
    const label = document.createElement('p');
    label.textContent = details[i].label;
    const data = document.createElement('p');
    data.textContent = details[i].data;

    weatherDetails.appendChild(icon);
    weatherDetails.appendChild(label);
    weatherDetails.appendChild(data);
  }

  content.appendChild(weatherDetails);
}

const createWeatherForecast = () => {

}


export {createWeatherInfo, createSearch, createWeatherDetails, createWeatherForecast};