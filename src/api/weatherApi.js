import axios from 'axios'

const API_KEY = 'eb1ae437745a969a5c926a8fe8e41537'

// 현재 위치
export function getLocation() {
   return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
   })
}

// 현재 날씨
export async function getWeather() {
   try {
      const position = await getLocation()
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      // console.log('위도', lat)
      // console.log('경도', lng)

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`)
      return response.data
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

// 5일치 날씨
export async function getWeekWeather() {
   try {
      const position = await getLocation()
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`)
      return response.data
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}

// 카카오맵 날씨
export async function getMapWeather(lat, lng) {
   try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`)
      return response.data
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}
