import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeekWeather } from '../../features/weatherWeekSlice'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import dayjs from 'dayjs'
import '../css/WeekWeather.css'
import 'swiper/css'
import 'swiper/css/navigation'

function WeekWeatherSlider() {
   const dispatch = useDispatch()
   const { forecast, loading, error } = useSelector((state) => state.forecast)

   useEffect(() => {
      dispatch(fetchWeekWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!forecast) return null

   console.log(forecast)

   return (
      <Swiper slidesPerView={4} spaceBetween={15} navigation={true} modules={[Navigation]} className="mySwiper">
         {forecast.list.map((x) => (
            <SwiperSlide key={x.dt}>
               <p className="week_day">{dayjs(x.dt_txt).format('MM/DD HH:mm')}</p>
               <p>
                  <img src={`https://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`} alt={x.weather[0].description} />
               </p>
               <p className="week_temp">
                  <span>{x.main.temp}°C</span>
               </p>
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default WeekWeatherSlider
