import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../../../features/weatherSlice'
import MainCardItem from './MainCardItem'

function MainCard({ icon, iconAlt, content }) {
   const dispatch = useDispatch()
   const { weather, loading, error } = useSelector((state) => state.weather)

   useEffect(() => {
      dispatch(fetchWeather())
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!weather) return null

   // 풍향
   const direction = ['북풍', '북북동풍', '북동풍', '동북동풍', '동풍', '동남동풍', '남동풍', '남남동풍', '남풍', '남남서풍', '남서풍', '서남서풍', '서풍', '서북서풍', '북서풍', '북북서풍']
   const windDeg = (deg) => {}

   // 구름
   const cloudAmount = () => {
      const windValue = weather.id
      if (windValue === 800) {
         return '구름 없음'
      } else if (windValue === 801 || windValue === 802 || windValue === 803) {
         return '구름 적음'
      } else {
         return '구름 많음'
      }
   }

   // 습도
   const humidity = () => {
      const humidityValue = weather.main.humidity
      if (0 <= humidityValue && humidityValue < 30) {
         return '습도 낮음'
      } else if (30 <= humidityValue && humidityValue < 70) {
         return '습도 적정'
      } else if (70 <= humidityValue && humidityValue < 100) {
         return '습도 높음'
      }
   }

   const visibility = () => {
      const visibilityValue = weather.visibility
      if (visibilityValue < 1000) {
         return '시야 나쁨'
      } else if (1000 <= visibilityValue && visibilityValue < 5000) {
         return '시야 보통'
      } else if (5000 <= visibilityValue && visibilityValue < 10000) {
         return '시야 양호'
      } else {
         return '시야 매우좋음'
      }
   }

   return (
      <div className="main_card">
         <MainCardItem icon={'../../../images/cloud.png'} iconAlt={'구름'} content={cloudAmount()} />
         <MainCardItem
            icon={'../../../images/humidity.png'}
            iconAlt={'습도'}
            content={
               <>
                  <p className="humidity_label">{humidity()}</p>
                  <p className="humidity_value">{`${weather.main.humidity} %`}</p>
               </>
            }
         />
         <MainCardItem icon={'../../../images/visibility.png'} iconAlt={'시야'} content={visibility()} />
         <MainCardItem icon={'../../../images/wind.png'} iconAlt={'바람'} content={content} />
      </div>
   )
}

export default MainCard
