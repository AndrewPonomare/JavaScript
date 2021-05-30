var city_humidity = document.getElementById('city_humidity');
var city_pressure = document.getElementById('city_pressure');
var city_temperature = document.getElementById('city_temperature');
var city_windSpeed = document.getElementById('city_wind-speed');
var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var getWeatherButton = document.getElementById('get-weather');
var get_weather_city = document.getElementById('get_weather_city');
var current_city = document.getElementById('current_city')



function getLocationCoords() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}


function getWeatherData(latitude, longitude) {
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b2abb924d57296d0fb75a309f5adb5de')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        displayData(data);
        console.log(data);
    });
      
}

function getWeatherCityData() {
    const city = document.getElementById('city').value

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCityData(data);
        })
}

function displayData(data) {
    temperature.innerText = 'temperature ' + kToC(data.main.temp) + ' C';
    humidity.innerText = 'humidity ' + (data.main.humidity) + ' %';
    pressure.innerText = 'pressure ' + (data.main.pressure) + ' Па';
    windSpeed.innerText = 'wind speed ' + (data.wind.speed) + ' м/с';
    console.log(data);
    current_city.innerHTML = data.name
}

function displayCityData(data) {
    city_temperature.innerText = 'temperature ' + kToC(data.main.temp) + ' C';
    city_humidity.innerText = 'humidity ' + (data.main.humidity) + ' %';
    city_pressure.innerText = 'pressure ' + (data.main.pressure) + ' Па';
    city_windSpeed.innerText = 'wind speed ' + (data.wind.speed) + ' м/с';
    console.log(data);
}

function kToC(k) {
    return Math.round(k - 273);
}


get_weather_city.addEventListener('click', getWeatherCityData)
getWeatherButton.addEventListener('click', getLocationCoords)