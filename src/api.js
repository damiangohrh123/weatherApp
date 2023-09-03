const getWeatherData = async (location) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195eeb5762ae44fab22142534232908&q=${location}`, {mode: 'cors'});

  if (response.status === 200) {
    let json = await response.json();
    let processedData = processData(json);
    console.log(json);
    console.log(processedData);
  } else {
    throw new Error ('Failed to fetch data');
  }
}

const processData = (weatherData) => {
  // Grab all the data and I want to display on the page
  const myData = {
    condition: weatherData.current.condition.text,
    feelsLike: {
      c: weatherData.current.feelslike_c,
      f: weatherData.current.feelslike_f,
    },
    currentTemp: {
      c: weatherData.current.temp_c,
      f: weatherData.current.temp_f
    },
    wind: weatherData.current.wind_kph,
    humidity: weatherData.current.humidity,
    location: `${weatherData.location.name.toUpperCase()}, ${weatherData.location.country.toUpperCase()}`,
    time: weatherData.location.localtime
  };

  return myData;
}

export { getWeatherData, processData };
