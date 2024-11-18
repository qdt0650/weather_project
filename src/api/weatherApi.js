import axios from 'axios'

const API_KEY = 'eb1ae437745a969a5c926a8fe8e41537'

navigator.geolocation.getCurrentPosition((position) => {
   const lat = position.coords.latitude // 위도
   const lon = position.coords.longitude // 경도
   getWeather(lat, lon)
})

async function weatherData(lat, lon) {
   const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
   const data = await fetchWeather.json()

   return data
}

async function getWeather(lat, lon) {
   const data = await weatherData(lat, lon)
   console.log(data)
}

export default weatherApi
