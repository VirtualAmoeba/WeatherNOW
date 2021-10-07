const submitBtn= document.getElementById("submit-btn");
const inputBtn = document.getElementById('cityInput');

const getWeatherData = (cityName) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=c1032cc72b1ef5fe78257a9931020ec3')
    .then (Response => console.log(Response.json()))
    .then(data =>{
        let temp = data.main.temp;
        let humidity = data.main.humidity;
        let tempHigh = data.main.temp_max;
        let tempLow = data.main.temp_min;
        let cityName = data.name;
        let weather = data.weather;
        
        document.getElementById('city').innerText = cityName
        document.getElementById('temp').innerText = temp
        document.getElementById('temph').innerText = temp_max
        document.getElementById('templ').innerText = temp_min
        document.getElementById('humid').innerText = humidity
        document.getElementById('weather').innerText = weather
        
        
    })
    .catch(res => alert("Type Correct City Name"))
}

submitBtn.addEventListener('click', e => {
    
    
    e.preventDefault();
    getWeatherData(inputBtn.value);
});

