var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherButton = document.getElementById('get-weather');
var getWeatherCityButton = document.getElementById('get_weather_city');

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
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
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

function getWeatherCity() {
    var city = inputCity.value;
    if(city){
        fetch; 'http://(api.openweathermap.org/data/2.5/weather?q=' + city + '&appid={b2abb924d57296d0fb75a309f5adb5de}';
        getWeatherData();
    }else{
        alert("Please, enter city")
    }
}

getWeatherButton.addEventListener('click', getLocationCoords);
