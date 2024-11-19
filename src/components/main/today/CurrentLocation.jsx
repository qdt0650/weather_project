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
               <span>{weather.name}</span>
            </div>
         ) : null}
      </>
   )
}

export default CurrentLocation
