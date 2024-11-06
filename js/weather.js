const apiKey = '1a1624a31964d526226977cb6304d346';  

const getWeatherBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');


async function fetchWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    

    const response = await fetch(url);
    

    if (!response.ok) {
      throw new Error('City not found or API error');
    }
    

    const data = await response.json();
    
 
    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherDescription.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    console.error('Error:', error);
    cityName.textContent = 'Error fetching weather data';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
  }
}


getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    cityName.textContent = 'Please enter a city name';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
  }
});
