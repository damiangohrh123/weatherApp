// Import background images
import Morning from './images/morningBackground.jpg';
import Night from './images/nightBackground.jpg';

const getWeatherData = async (location) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=195eeb5762ae44fab22142534232908&q=${location}&days=7`,
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

  /**
   * Grab all the data and I want to display on the page
   * This data is for the current day
   *  */ 
  const myData = {
    condition: weatherData.current.condition.text,
    feelsLike: {
      c: `${weatherData.current.feelslike_c} ℃`,
      f: `${weatherData.current.feelslike_f} ℉`,
    },
    currentTemp: {
      c: `${weatherData.current.temp_c} ℃`,
      f: `${weatherData.current.temp_f} ℉`,
    },
    wind: `${weatherData.current.wind_kph} km/h`,
    humidity: `${weatherData.current.humidity} %`,
    location: `${weatherData.location.name.toUpperCase()}, ${weatherData.location.country.toUpperCase()}`,
    time: weatherData.location.localtime,
    chanceToRain: `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %`,
    isDay: weatherData.current.is_day,
    icon: weatherData.current.condition.icon,

  /**
   * This data is the current day's forecast
   *  */ 
    forecastDay: weatherData.forecast.forecastday[0].hour,
    forecastNextDay: weatherData.forecast.forecastday[1].hour,

  /**
   * This data is the forecast for the entire week
   */
    forecastWeek: weatherData.forecast.forecastday,

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
  
  /*
  // Change background according to day or night
  if (processedData.isDay === 1) {
    document.body.style.backgroundImage = `url(${Morning})`;
  } else if (processedData.isDay === 0) {
    document.body.style.backgroundImage = `url(${Night})`;
  }
  */

  // Condition Icon
  const absoluteUrl = `https:${processedData.icon}`;
  document.querySelector('#weatherIcon').src = absoluteUrl;

  // Hourly forecast for current day
  const forecastStartTime = new Date(processedData.time).getHours();
  let forecastEndTime = forecastStartTime + 6;

  if (forecastEndTime > 24 || forecastEndTime === 24) {
    const remainingTime = forecastEndTime - 24;
    const indexLeftOff = 6 - (remainingTime + 1);

    for (let i = forecastStartTime, elementIndex = 0; i < 24; i++, elementIndex++){
      const nextHour = (i + 1) % 24;

      if (nextHour !== 0) {
        const forecastedTime = processedData.forecastDay[nextHour];
        const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');

        document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;
        document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;
        document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c} ℃`;

      } else if (nextHour === 0){
        const forecastedTime = processedData.forecastNextDay[nextHour];
        const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');

        document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;
        document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;
        document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c} ℃`;
      }
    }

    for (let i = 1 ; i < remainingTime + 1; i++) {
      let nextDayIndex = indexLeftOff + i;

      const forecastedTime = processedData.forecastNextDay[i];
      const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');
      
      document.querySelector(`#hourlyForecastTime${nextDayIndex}`).textContent = `${forecastedHour}00`;
      document.querySelector(`#hourlyForecastIcon${nextDayIndex}`).src = `https:${forecastedTime.condition.icon}`;
      document.querySelector(`#hourlyForecastTemperature${nextDayIndex}`).textContent = `${forecastedTime.temp_c} ℃`;
    }

  } else {
    for (let i = forecastStartTime, elementIndex = 0; i < forecastEndTime; i++, elementIndex++) {
      const nextTime = i + 1;

      const forecastedTime = processedData.forecastDay[nextTime];
      const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');

      document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;
      document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;
      document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c} ℃`;
    }
  }

  // Daily forecast for current day and next 6 days
  const daysArray = [];
  for (let i = 0; i < 7; i++) {
    daysArray.push(processedData.forecastWeek[i]);
  }

  // For debugging purposes
  //console.log(daysArray);

  for (let i = 0; i < daysArray.length; i++) {
    const date = new Date(daysArray[i].date);

    // Get the day name
    const dayName = date.toLocaleDateString('en-US', {weekday: 'long'});

    // Change the first day's name to 'Today', display the next 6 days normally
    if ( i !== 0) {
      document.querySelector(`#dailyForecastDay${i}`).textContent = dayName;
    } else if ( i === 0) {
      document.querySelector(`#dailyForecastDay${i}`).textContent = 'Today';
    }

    document.querySelector(`#dailyForecastIcon${i}`).src = `https:${daysArray[i].day.condition.icon}`;
    document.querySelector(`#condition${i}`).textContent = daysArray[i].day.condition.text;
    document.querySelector(`#temperatureMin${i}`).textContent = `${daysArray[i].day.mintemp_c} ℃/`;
    document.querySelector(`#temperatureMax${i}`).textContent = `${daysArray[i].day.maxtemp_c} ℃`;
  }
}

export { getWeatherData };
