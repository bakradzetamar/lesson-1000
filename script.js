function fetchWeather(lat, lon) {
  const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl)
    .then(response => {
      const weatherData = response.data;
      const weatherDescription = weatherData.weather[0].description;
      const temperature = weatherData.main.temp;
      const cityName = weatherData.name;

      const weatherInfo = `Weather in ${cityName}: ${weatherDescription}, Temperature: ${temperature}°C`;
      document.getElementById('weather').textContent = weatherInfo;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}


function displayTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('time').textContent = timeString;
}

// Function timer
function displayTimer() {
  const currentTime = new Date().getTime();
  const countDownDate = new Date(currentTime + 60000 * 10); // Timer for 10 minutes

  const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerString = `${minutes}m ${seconds}s`;
    document.getElementById('timerDisplay').textContent = timerString;

    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById('timerDisplay').textContent = "EXPIRED";
    }
  }, 1000);
}


const latitude = 40.7128;
const longitude = -74.0060;
fetchWeather(latitude, longitude);


setInterval(displayTime, 1000);


displayTimer();