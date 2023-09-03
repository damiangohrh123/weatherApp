const getWeatherData = async (location) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=195eeb5762ae44fab22142534232908&q=${location}`,
    { mode: 'cors' },
  );

  if (response.status === 200) {
    let json = await response.json();
    let processedData = processData(json);

    // Debugging purposes
    console.log(json);
    console.log(processedData);
    // 

    displayData(processedData);
  } else {
    throw new Error('Failed to fetch data');
  }

};

const processData = (weatherData) => {
  // Grab all the data and I want to display on the page
  const myData = {
    condition: weatherData.current.condition.text,
    feelsLike: {
      c: `${weatherData.current.feelslike_c} °C`,
      f: `${weatherData.current.feelslike_f} °C`,
    },
    currentTemp: {
      c: `${weatherData.current.temp_c} °C`,
      f: `${weatherData.current.temp_f} °C`,
    },
    wind: `${weatherData.current.wind_kph} km/h`,
    humidity: `${weatherData.current.humidity} %`,
    location: `${weatherData.location.name.toUpperCase()}, ${weatherData.location.country.toUpperCase()}`,
    time: weatherData.location.localtime,
    chanceToRain: `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %`
  };

  return myData;
};

const displayData = (processedData) => {

  // Weather description
  document.querySelector('#description').textContent = processedData.condition;
  document.querySelector('#location').textContent = processedData.location;
  document.querySelector('#date').textContent = processedData.time;
  document.querySelector('#temperature').textContent = processedData.currentTemp.c;

  // Weather details
  document.querySelector('#feelsLike').textContent = processedData.feelsLike.c;
  document.querySelector('#humidity').textContent = processedData.humidity;
  document.querySelector('#chanceOfRain').textContent = processedData.chanceToRain;
  document.querySelector('#windSpeed').textContent = processedData.wind;
  
}

export { getWeatherData };
