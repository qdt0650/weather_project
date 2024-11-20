// 메인 오늘날씨 - 카드
import TodayBaseCardItem from './TodayBaseCardItem'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
function TodayWeatherCard({ label, value }) {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!weather) return null

   // console.log(weather)
   // 유닉스타임 일반시간으로 변환
   const unixTimeDate = (date) => {
      const sunDate = new Date(date * 1000)
      const sunHour = sunDate.getHours()
      const sunMinutes = sunDate.getMinutes()

      return { time: `${sunHour} : ${sunMinutes}` }
   }

   const sunriseTime = unixTimeDate(weather.sys.sunrise).time
   const sunsetTime = unixTimeDate(weather.sys.sunset).time

   return (
      <div className="today_weather_card">
         <TodayBaseCardItem label={'일출'} value={sunriseTime} />
         <TodayBaseCardItem label={'일몰'} value={sunsetTime} />
         <TodayBaseCardItem label={'습도'} value={`${weather.main.humidity}%`} />
      </div>
   )
}

export default TodayWeatherCard
