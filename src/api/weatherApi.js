import axios from 'axios'

const API_KEY = 'eb1ae437745a969a5c926a8fe8e41537'

// 현재 위치
export function getLocation() {
   return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
   })
}

export async function getWeather() {
   try {
      // 위도 경도
      const position = await getLocation()
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      console.log('위도', lat)
      console.log('경도', lon)

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
      return response.data
   } catch (error) {
      console.error(`API 요청 오류: ${error.message}`)
      throw error
   }
}
