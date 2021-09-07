const API_KEY = "0a4e114a03dec1b73a17f888db92ba27";
const cityName = document.querySelector("#weather span:first-child");
const currentWeather = document.querySelector("#weather span:last-child");

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            cityName.innerText = data.name;
            currentWeather.innerText = data.weather[0].main;
        })
        ;

   
}

function onGeoError(){
    alert("Can't find your location.")
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

