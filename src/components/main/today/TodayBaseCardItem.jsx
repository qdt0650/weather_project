// 메인 오늘날씨 - 카드아이템
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
function TodayBaseCardItem({ label, value }) {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!weather) return null

   console.log(weather)
   // 유닉스타임 일반시간으로 변환
   const sunsetUnix = weather.sys.sunset
   const sunsetDate = new Date(sunsetUnix * 1000)
   const sunsetHour = sunsetDate.getHours()
   const sunsetMinutes = sunsetDate.getMinutes()
   const sunsetTime = `${sunsetHour} : ${sunsetMinutes}`
   console.log(sunsetTime)
   return (
      <div className="todady_base_cardItem">
         <span>일출</span>
         <span>{sunsetTime}</span>
      </div>
   )
}

export default TodayBaseCardItem
