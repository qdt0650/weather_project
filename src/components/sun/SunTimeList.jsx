import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMapWeather } from '../../features/sunSlice'
import '../css/Sun.css'
function SunTimeList() {
   const positions = [
      {
         title: '인천',
         lat: 37.4561,
         lng: 126.7059,
      },
      {
         title: '강릉',
         lat: 37.7563,
         lng: 128.8991,
      },
      {
         title: '시흥',
         lat: 37.3773,
         lng: 126.805,
      },
      {
         title: '당진',
         lat: 36.9005,
         lng: 126.6326,
      },
      {
         title: '포항',
         lat: 36.0178,
         lng: 129.3609,
      },
      {
         title: '부산',
         lat: 35.1798,
         lng: 129.075,
      },
      {
         title: '제주도',
         lat: 33.5043,
         lng: 126.5198,
      },
      {
         title: '대전',
         lat: 36.3578,
         lng: 127.3867,
      },
      {
         title: '해남',
         lat: 34.5704,
         lng: 126.6012,
      },
   ]

   const dispatch = useDispatch()
   const { sun, loading, error } = useSelector((state) => state.sun)

   const [sunData, setSunData] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const results = await Promise.all(positions.map((pos) => dispatch(fetchMapWeather({ lat: pos.lat, lng: pos.lng })).unwrap()))

            const sunTimes = results.map((result, index) => ({
               location: positions[index].title,
               sunrise: result.sys.sunrise,
               sunset: result.sys.sunset,
            }))

            setSunData(sunTimes)
         } catch (error) {
            console.error('', error)
         }
      }

      fetchData()
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p> Error: {error} </p>
   if (!sun) return null

   console.log(sun)
   return (
      <div className="suntime_list">
         <ul>
            {sunData.map((data, index) => (
               <li key={index}>
                  <span className="city_name">{data.location}</span>
                  <span className="city_sunrise">일출: {new Date(data.sunrise * 1000).toLocaleTimeString()}</span>
                  <span className="city_sunset">일몰: {new Date(data.sunset * 1000).toLocaleTimeString()}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default SunTimeList
