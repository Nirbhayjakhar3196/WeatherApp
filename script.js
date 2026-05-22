const cityInput = document.getElementById('city-input')
const searchBtn = document.getElementById('search-btn')
const weatherIcon = document.getElementById('weather-icon')
const cityName = document.getElementById('city-name')
const tempa = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

searchBtn.addEventListener('click' , () => {
    let storedValue = cityInput.value

    if(storedValue === ""){
        alert("please Enter city Name")
        return
    }

    fetchData(storedValue)

    
})

async function fetchData(city) {

    const apiKey = "8d446928a347191ebf7b3f8e4a17bd73"

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

    const data = await response.json()

    if(data.cod === "404"){
        alert("City not found. Please enter a valid city name.")
        return;
    } 

    const iconCode = data.weather[0].icon

    cityName.textContent = data.name
    tempa.textContent = `${data.main.temp}`
    humidity.textContent = `${data.main.humidity}%`
    wind.textContent = `${data.wind.speed} km/h`
    weatherIcon.src =`https://openweathermap.org/img/wn/${iconCode}@2x.png`

    console.log(data);

    

    
}