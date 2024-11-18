// 메인 오늘날씨 - 현재위치
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

function CurrentLocation() {
   const dispatch = useDispatch()
   const { weathers, loading, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      dispatch(fetchWeather({ category: 'weather' }))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   return (
      <>
         <div className="current_location">
            <LocationOnOutlinedIcon />
            <span>현재위치 : </span>
         </div>
      </>
   )
}

export default CurrentLocation
