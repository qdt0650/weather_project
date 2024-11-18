// 메인 오늘날씨 - 현재위치
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
   return (
      <>
         {weather ? (
            <div className="current_location">
               <LocationOnOutlinedIcon />
               {/* 날씨에 따른 아이콘 넣기() */}
               <p>{weather.main.temp}°C</p>
               <span>현재 위치: {weather.name}</span>
               <p>날씨: {weather.weather[0].description}</p>
               <p>체감 {weather.main.feels_like}</p>
               <p>습도 {weather.main.humidity}</p>
            </div>
         ) : null}
      </>
   )
}

export default CurrentLocation
