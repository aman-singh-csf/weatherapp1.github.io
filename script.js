function getWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
            const description = data.weather[0].description;
            const cityName = data.name;

            weatherInfo.innerHTML = `
                <p>City: ${cityName}</p>
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = 'Error fetching weather data. Please try again.';
        });
}
