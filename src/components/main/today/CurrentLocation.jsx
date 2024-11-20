// 메인 오늘날씨
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

function CurrentLocation() {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!weather) return null

   return (
      <>
         <div className="current_location">
            <LocationOnOutlinedIcon />
            <span>{weather.name}</span>
         </div>
         <div className="current_temperature">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
            <span>{weather.main.temp}°C</span>
         </div>
         <div className="current_humiture">
            <span>
               <i>최저</i> {weather.main.temp_min} °C
            </span>
            <span>
               <i>최고</i> {weather.main.temp_max} °C
            </span>
            <span>
               <i>체감</i> {weather.main.feels_like} °C
            </span>
         </div>
      </>
   )
}

export default CurrentLocation
