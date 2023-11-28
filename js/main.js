let cityWeather = ''
function cityName(q) {
    let http = new XMLHttpRequest;
   // http.open('get', `http://api.weatherapi.com/v1/forecast.json?key=f3fc01fa4f534ef2ad5131137231802&q=${q}&days=3&aqi=no&alerts=no`)
   http.open('get', `https://api.weatherapi.com/v1/forecast.json?key=f3fc01fa4f534ef2ad5131137231802&q=${q}&days=3&aqi=no&alerts=no
   `)
    http.send();
    http.addEventListener('readystatechange', function () {
        if (http.readyState == 4) {
            cityWeather=  JSON.parse(http.response)
           //console.log(http.response)
            showData();
        }
    })
    return cityWeather
}

cityName('egypt');


function convertDate1() {
    let d = ``;
    let day;
    d = new Date(`${cityWeather.forecast.forecastday[0].date}`)
    day = d.getDay();
    
    if (day == 0)
        return 'sunday'
    if (day == 1)
        return 'monday'
    if (day == 2)
        return 'tuesday'
    if (day == 3)
        return 'wednesday'
    if (day == 4)
        return 'thursday'
    if (day == 5)
        return 'friday'
    if (day == 6)
        return 'saturday'
}


function convertDate2() {
    let d = ``;
    let day;
    d = new Date(`${cityWeather.forecast.forecastday[1].date}`)
    day = d.getDay();
    
    if (day == 0)
        return 'sunday'
    if (day == 1)
        return 'monday'
    if (day == 2)
        return 'tuesday'
    if (day == 3)
        return 'wednesday'
    if (day == 4)
        return 'thursday'
    if (day == 5)
        return 'friday'
    if (day == 6)
        return 'saturday'
}


function convertDate3() {
    let d = ``;
    let day;
    d = new Date(`${cityWeather.forecast.forecastday[2].date}`)
    day = d.getDay();
    
    if (day == 0)
        return 'sunday'
    if (day == 1)
        return 'monday'
    if (day == 2)
        return 'tuesday'
    if (day == 3)
        return 'wednesday'
    if (day == 4)
        return 'thursday'
    if (day == 5)
        return 'friday'
    if (day == 6)
        return 'saturday'
}

function getDayNumber() {
    let d = ``;
    let day;
    d = new Date(`${cityWeather.forecast.forecastday[0].date}`)
    day = d.getDate();
    return day;
}


function getMonthName() {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let name = month[d.getMonth()];
    return name;
}



let daysWeather = document.getElementById('daysWeather');

function showData() {
    let box = ``;

        box += `<div class=" col-lg-4 mt-3">
        <div class="day1">
            <div class="day1-head d-flex  text-white justify-content-between">
                <p>${convertDate1()}</p>
                <p>${getDayNumber()}${getMonthName()}</p>
            </div>
            <div class="day1-city mt-2">
                <p class="fa-2x text-white">${cityWeather.location.name}</p>
            </div>
            <div class="day1-weather d-flex flex-nowrap p-2 align-items-center">
            <p class="fa-5x text-white">${cityWeather.current.temp_c}</p>
            <p class="fa-5x text-white p-2" >C</p>
            <img src="${cityWeather.current.condition.icon}" alt="">
            </div>
            <div class="day1-clearaty">
                <p class="text-info">${cityWeather.current.condition.text}</p>
            </div>
            <div class="day1-icons d-flex justify-content-around mb-1">
            <i class="fa-solid fa-umbrella text-light"> 20%</i>
            <i class="fa-solid fa-wind text-light"> 18 km/h</i>
            <i class="fa-regular fa-compass text-light"> east</i>
            </div>
        </div>
    </div>
    
    
    <div class="col-lg-4 bg-dark text-center mt-3">
                    <div class="day2-head text-white">
                        <p>${convertDate2()}</p>
                    </div>
                    <div class="day2-icon py-4">
                    <img src="${cityWeather.forecast.forecastday[1].day.condition.icon}" alt="">
                    </div>
                    <div class="day2-weather">
                        <p class="text-white fa-2x">${cityWeather.forecast.forecastday[1].day.maxtemp_c} C</p>
                        <p class="text-light">${cityWeather.forecast.forecastday[1].day.mintemp_c} C</p>
                        <p class="py-2 text-info">${cityWeather.forecast.forecastday[1].day.condition.text}</p>
                    </div>
                </div>


                <div class="col-lg-4 text-center mt-3">
                <div class="day2-head text-white">
                    <p>${convertDate3()}</p>
                </div>
                <div class="day2-icon py-4">
                <img src="${cityWeather.forecast.forecastday[2].day.condition.icon}" alt="">
                </div>
                <div class="day2-weather">
                    <p class="text-white fa-2x">${cityWeather.forecast.forecastday[2].day.maxtemp_c} C</p>
                    <p class="text-light">${cityWeather.forecast.forecastday[2].day.mintemp_c} C</p>
                    <p class="py-2 text-info">${cityWeather.forecast.forecastday[2].day.condition.text}</p>
                </div>
            </div> 
    
    `
    daysWeather.innerHTML = box;
}


let searchInput=document.getElementById('searchInput');
let searchInputBtn=document.getElementById('searchInputBtn')

searchInput.addEventListener('keyup',searchForCity)

function searchForCity()
{
    cityName(searchInput.value)
}