// Search Bar
// 1. Take user input
// 2. Return data from API
// 3. Console log it to check
// 4. Traverse data to populate/find temp, humidity, wind, weather icon, future weather, days/date, highs and lows
// autocomplete?

/*console.log("This is mo")

const searchBtn = document.getElementById("searchBtn");
const url = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}`;
const apiKey = "c1032cc72b1ef5fe78257a9931020ec3";

let header = document.getElementById("header");
let dummyDiv = document.getElementById("dummyDiv");

function getTemp() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);

      let temp = data.main.temp;
      let humidity = data.main.humidity;
      let tempHigh = data.main.temp_max;
      let tempLow = data.main.temp_min;
      let cityName = data.name;
      let weather = data.weather[0].description;

      console.log(temp);
      console.log(humidity);
      console.log(tempHigh);
      console.log(tempLow);
      console.log(cityName);
      console.log(weather);

      //   console.log(weather);

      if (cityName !== 0) {
        {
          dummyDiv.innerHTML = `
            <div class="">
                <div class="left-div">
                    <div class=  "top-div">
                        <h1 class="">${cityName}</h1>
                        <h2 class="">${temp} Degrees</h5>
                        <h3>class="">It is :${weather} in ${cityName} today</5>
                    </div>
    
                    <div class= "bottom">
                        <h4 class=""> The low for today will be: ${tempLow}</h4>
                        <h4 class=""> The high for today will be: ${tempHigh}</h4>
                        <h4 class=""> It seems like the humidity will be: ${humidity}%</h4>
                    </div>
                </div>
            </div>
            `;
        }
      } else {
        header.innerHTML = `<p> There are no results please try again </p>`;
      }
    });
}*/

const submitBtn= document.getElementById("submit-btn")
submitBtn.addEventListener('click',function(){
  const inputbtn = document.getElementById('input-btn').value

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputbtn+'&appid=c1032cc72b1ef5fe78257a9931020ec3')
  .then (Response => Response.json())
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
})

