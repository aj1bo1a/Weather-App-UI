async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "95737a26f49ef4ac68bd128c65109107"; // OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
      `;
      document.getElementById("weatherInfo").innerHTML = weatherInfo;
    } else {
      document.getElementById("weatherInfo").innerHTML = `<p>City not found.</p>`;
    }
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data.</p>`;
  }
}
