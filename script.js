const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0ed09cf5d3mshb31ee37230f7d7ep129892jsn0095cd353655',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather=(city) => {
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        humidity2.innerHTML = response.humidity
        wind_speed2.innerHTML = response.wind_speed
        temp2.innerHTML = response.temp
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")