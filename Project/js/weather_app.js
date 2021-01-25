var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var getWeatherButton = document.getElementById('get-weather');
var getWeatherCityButton = document.getElementById('get_weather_city');
var city = document.getElementById('city');


function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);

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
    temperature.innerText = 'Температура ' + kToC(data.main.temp) + ' ℃';
    humidity.innerText = 'Вологість ' + (data.main.humidity) + ' %';
    pressure.innerText = 'Тиск ' + mm(data.main.pressure) + ' мм.рт.ст.';
    windSpeed.innerText = 'Швидкість вітру ' + (data.wind.speed) + ' м/с';
    city.innerText = (data.name)
    console.log(data);
}

function kToC(k) {
    return Math.round(k - 273);
}

function mm(mm) {
    return Math.round(mm * 0.75)
}

function getWeatherCity() {
    var city = inputCity.value;
    if(city){
        fetch('http://(api.openweathermap.org/data/2.5/weather?q=' + city + '&appid={b2abb924d57296d0fb75a309f5adb5de}');
        getWeatherData();
    }else{
        alert("Please, enter city")
    }
}

getWeatherButton.addEventListener('click', getLocationCoords);
