var rowData = document.querySelector("#rowData");
var searchInput = document.querySelector("#searchInput");
var searchBtn = document.querySelector("#searchBtn");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weatherData = null;
var lat = "" , lon = "";

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getWeather(`${lat},${lon}`)
        },
        (error) =>{
            getWeather("cairo")
        }
    )
}else{
    getWeather("cairo")
}

async function getWeather(location){
    try{
         document.querySelector(".spinner").classList.remove("d-none")
        var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=02f0335bdf1540d5bab170444250411&q=${location}&days=3`)
        weatherData = await res.json()
        if(weatherData.error){
            rowData.innerHTML = `<p class="alert background-color-main text-danger border-0 text-center w-50 mx-auto">City <span class="text-white fst-italic">\" ${searchInput.value} \"</span> Not Found</p>`
            return;
        }
        displayRowData()
        
    }
    catch(err){
         rowData.innerHTML = `<p class="alert background-color-main text-danger border-0 text-center w-50 mx-auto"> Something went wrong. Please try again later.</p>`;  
        }
    finally{
        document.querySelector(".spinner").classList.add("d-none")
    }
}


function displayRowData(){
    var today = weatherData.forecast.forecastday[0];
    var tomorrow = weatherData.forecast.forecastday[1];
    var afterTomorrow = weatherData.forecast.forecastday[2];
    var date = new Date();
    var dayIndex = date.getDay();
    var monthIndex = date.getMonth();
    rowData.innerHTML = `<div class="col-lg-4 h-100">
                <div
                class="weather-card rounded-3 overflow-hidden background-color-primary h-100"
                >
                <div
                    class="d-flex justify-content-between background-color-fourth px-3 py-2"
                >
                    <p class="text-white-50 mb-0">${days[dayIndex]}</p>
                    <p class="text-white-50 mb-0">${date.getDate()} ${months[monthIndex]}</p>
                </div>
                <div class="p-3">
                    <h6 class="text-white-50 pt-2">${weatherData.location.name}</h6>
                    <h1 class="text-white">${weatherData.current.temp_c}°C</h1>
                    <img src="https:${today.day.condition.icon}" alt="${today.day.condition.text}" />
                    <p class="text-info py-2">${today.day.condition.text}</p>
                    <div class="d-flex gap-3 text-white-50 pb-3">
                    <span><i class="fas fa-cloud-rain"></i> ${today.day.daily_chance_of_rain}%</span>
                    <span><i class="fas fa-wind"></i> ${today.day.maxwind_kph} km/h</span>
                    <span><i class="fas fa-compass"></i> ${weatherData.current.wind_dir}</span>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-4 text-center">
                <div
                class="weather-card rounded-3 overflow-hidden background-color-fifth h-100"
                >
                <div class="background-color-sixth px-3 py-2">
                    <p class="text-white-50 mb-0">${days[(dayIndex + 1) % 7]}</p>
                </div>
                <div class="p-3">
                    <img src="https:${tomorrow.day.condition.icon}" alt="${tomorrow.day.condition.text}" />
                    <h4 class="pt-3 text-white">${tomorrow.day.maxtemp_c}°C</h4>
                    <p class="text-white-50">${tomorrow.day.mintemp_c}°</p>
                    <p class="text-info pt-3">${tomorrow.day.condition.text}</p>
                </div>
                </div>
            </div>

            <div class="col-lg-4 text-center">
                <div
                class="weather-card rounded-3 overflow-hidden background-color-primary h-100"
                >
                <div class="background-color-fourth px-3 py-2">
                    <p class="text-white-50 mb-0">${days[(dayIndex+2)%7]}</p>
                </div>
                <div class="p-3">
                    <img src="https:${afterTomorrow.day.condition.icon}" alt="${afterTomorrow.day.condition.text}" />
                    <h4 class="pt-3 text-white">${afterTomorrow.day.maxtemp_c}°C</h4>
                    <p class="text-white-50">${afterTomorrow.day.mintemp_c}°</p>
                    <p class="text-info pt-3">${afterTomorrow.day.condition.text}</p>
                </div>
                </div>
            </div>`
}


searchInput.addEventListener("keyup" , function(){
    var city = searchInput.value.trim().toLowerCase();
    if(city.length > 2){
        getWeather(city)
    }
    
})

searchBtn.addEventListener("click" , function(){
var city = searchInput.value.trim().toLowerCase();
if(city.length > 0){
    getWeather(city)
}

})
