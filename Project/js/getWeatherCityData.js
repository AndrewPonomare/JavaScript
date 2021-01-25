var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherCityButton = document.getElementById('get_weather_city');

function getCity() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherCityData(city) {
    fetch; 'http://(api.openweathermap.org/data/2.5/weather?q=' + city + '&appid={b2abb924d57296d0fb75a309f5adb5de}';
    then(function (response) {
        return response.json();
    })
        .then(function (data) {
            displayData(data);
        });
}

function displayData(data) {
    temperature.innerText = kToC(data.main.temp) + 'C';
    humidity.innerText = (data.main.humidity) + '%';
    pressure.innerText = (data.main.pressure) + ' Па';
    windSpeed.innerText = (data.wind.speed) + ' м/с';
    console.log(data);
}

function kToC(k) {
    return Math.round(k - 273);
}

getWeatherCityButton.addEventListener('click', getCity);
