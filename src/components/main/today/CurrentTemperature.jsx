// 메인 오늘날씨 - 현재 기온
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'

function CurrentTemperature() {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   return (
      <>
         {weather ? (
            <div className="current_temperature">
               <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
               <span>{weather.main.temp}°C</span>
            </div>
         ) : null}
      </>
   )
}

export default CurrentTemperature
