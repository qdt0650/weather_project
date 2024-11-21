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

   // 시야
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

   // 풍향
   const wind = {
      N: {
         min: 348.75,
         max: 11.25,
      },
      NNE: {
         min: 11.25,
         max: 33.75,
      },
      NE: {
         min: 33.75,
         max: 56.25,
      },
      ENE: {
         min: 56.25,
         max: 78.75,
      },
      E: {
         min: 78.75,
         max: 101.25,
      },
      ESE: {
         min: 101.25,
         max: 123.75,
      },
      SE: {
         min: 123.75,
         max: 146.25,
      },
      SSE: {
         min: 146.25,
         max: 168.75,
      },
      S: {
         min: 168.75,
         max: 191.25,
      },
      SSW: {
         min: 191.25,
         max: 213.75,
      },
      SW: {
         min: 213.75,
         max: 236.25,
      },
      WSW: {
         min: 236.25,
         max: 258.75,
      },
      W: {
         min: 258.75,
         max: 281.25,
      },
      WNW: {
         min: 281.25,
         max: 303.75,
      },
      NW: {
         min: 303.75,
         max: 326.25,
      },
      NNW: {
         min: 326.25,
         max: 348.75,
      },
   }
   const windName = {
      N: '북풍',
      NNE: '북북동풍',
      NE: '북동풍',
      ENE: '동북동풍',
      E: '동풍',
      ESE: '동남동풍',
      SE: '남동풍',
      SSE: '남남동풍',
      S: '남풍',
      SSW: '남남서풍',
      SW: '남서풍',
      WSW: '서남서풍',
      W: '서풍',
      WNW: '서북서풍',
      NW: '북서풍',
      NNW: '북북서풍',
   }

   const windFind = weather.wind.deg
   const windResult = (windFind) => {
      return Object.entries(wind).find(([key, value]) => value.min < windFind && windFind < value.max)?.[0]
   }

   // const windResult = () => {
   //    return Object.entries(wind).find((x) => {
   //       if ((x[1].min < weather.wind.deg && weather.wind.deg < x[1].max) || (11 >= x[1].min && 348.75 <= x[1].max)) {
   //          return x[0]
   //       }
   //    })
   // }

   return (
      <div className="main_card">
         <MainCardItem icon={'../../../images/cloud.png'} iconAlt={'구름'} content={cloudAmount()} />
         <MainCardItem
            icon={'../../../images/humidity.png'}
            iconAlt={'습도'}
            content={
               <>
                  <span className="humidity_label">{humidity()}</span>
                  <span className="humidity_value">{`${weather.main.humidity} %`}</span>
               </>
            }
         />
         <MainCardItem icon={'../../../images/visibility.png'} iconAlt={'시야'} content={visibility()} />
         <MainCardItem
            icon={'../../../images/wind.png'}
            iconAlt={'바람'}
            content={
               <>
                  <span>{windName[windResult(windFind)]}</span>
                  <span> {`${weather.wind.speed} m/s`}</span>
               </>
            }
         />
      </div>
   )
}

export default MainCard
