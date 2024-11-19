// 메인 오늘날씨 - 최저, 최고, 체감
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
function CurrentHumiture() {
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
         ) : null}
      </>
   )
}

export default CurrentHumiture
