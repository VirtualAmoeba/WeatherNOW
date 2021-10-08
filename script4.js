const submitBtn = document.getElementById("button");
//const inputBtn = document.getElementById('cityInput');
const input = document.getElementById('cityName');
const teperature = document.getElementById('temp'); 
const humid = document.getElementById('humidity');
const windSpeed = document.getElementById('wind');
let tempo = document.getElementById("tempo");

function getWeather(event){
    event.preventDefault()
    let city = input.value;
    console.log(city);
    let url = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1032cc72b1ef5fe78257a9931020ec3`)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
    console.log(data);
    return data;
})
    .then(function(data){
    tempo.innerHTML = Math.floor((data.main.temp-273.15) * 9/5 + 32);
    humid.innerHTML = data.main.humidity;
    windSpeed.innerHTML = data.wind.speed;
    return data;
})

    .catch(function(){
        console.log("There's an error somewhere.");
    })
}

submitBtn.addEventListener('click', getWeather);




















/*document.getElementById('city').innerText;
document.getElementById('temp').innerText = temp;
document.getElementById('temph').innerText = temp_max;
document.getElementById('templ').innerText = temp_min;
document.getElementById('humid').innerText = humidity;*/




/*const getWeatherData = async (city) => {
   let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c1032cc72b1ef5fe78257a9931020ec3');
    
        let foramattedData = await data.json();
        console.log(foramattedData);

         let cityName = foramattedData.name;
        document.querySelector('cityName').innerText = cityName;
        console.log(cityName);

        let temp = foramattedData.main.temp;
        document.querySelector('temp').innerText = temp;
        console.log(temp);

        let humidity = foramattedData.main.humidity;
        document.querySelector('humidity').innerText = humidity;
        console.log(humidity);

        let windSpeed = foramattedData.wind.speed +"MPH";
        document.querySelector('wind').innerText = windSpeed;
        console.log(windSpeed);
        
        
        
    };
    getWeatherData("Atlanta");*/

