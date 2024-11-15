import axios from 'axios'

const API_KEY = 'eb1ae437745a969a5c926a8fe8e41537'

// const currentLocation = () => {
//    navigator.geolocation.getCurrentPosition((position) => {
//       let lat = position.coords.latitude
//       let lon = position.coords.longitude
//    })
// }

// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`

// const weatherApi = axios.create({
//    baseURL: url,
//    headers: {
//       accept: 'application/json',
//       Authorization: API_KEY,
//    },
// })

// const fetchWeatherApi = async (url, params = {}) => {
//    try {
//       const response = await weatherApi.get(url, { params })
//       return response
//    } catch (error) {
//       console.log(`API 요청 오류: ${error.message}`)
//       throw error
//    }
// }

// const weatherApi = await axios.get(weatherUrl)
