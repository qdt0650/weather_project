import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMapWeather } from '../../features/sunSlice'
import '../css/Sun.css'

const { kakao } = window

function SunMap() {
   const dispatch = useDispatch()
   const { sun, loading, error } = useSelector((state) => state.sun)

   const infoWindows = useRef([])
   // const [locations, setLocations] = useState([])

   useEffect(() => {
      var container = document.getElementById('map')
      var options = {
         //지도를 생성할 때 필요한 기본 옵션
         center: new kakao.maps.LatLng(36.3578, 127.3867), //지도의 중심좌표.
         level: 13, //지도의 레벨(확대, 축소 정도)
      }

      var map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴

      var positions = [
         {
            title: '인천',
            latlng: new kakao.maps.LatLng(37.4561, 126.7059),
         },
         {
            title: '강릉',
            latlng: new kakao.maps.LatLng(37.7563, 128.8991),
         },
         {
            title: '시흥',
            latlng: new kakao.maps.LatLng(37.3773, 126.805),
         },
         {
            title: '당진',
            latlng: new kakao.maps.LatLng(36.9005, 126.6326),
         },
         {
            title: '포항',
            latlng: new kakao.maps.LatLng(36.0178, 129.3609),
         },
         {
            title: '부산',
            latlng: new kakao.maps.LatLng(35.1798, 129.075),
         },
         {
            title: '제주도',
            latlng: new kakao.maps.LatLng(33.5043, 126.5198),
         },
         {
            title: '대전',
            latlng: new kakao.maps.LatLng(36.3578, 127.3867),
         },
         {
            title: '해남',
            latlng: new kakao.maps.LatLng(34.5704, 126.6012),
         },
      ]

      var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'

      for (var i = 0; i < positions.length; i++) {
         var imageSize = new kakao.maps.Size(24, 35)
         var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
         var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀
            image: markerImage, // 마커 이미지
         })

         let infowindow = new kakao.maps.InfoWindow({
            content: '<span class="info_txt">Loding..</span>',
         })
         infoWindows.current.push({ marker, infowindow })

         kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
         kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))

         function makeOverListener(map, marker, infowindow) {
            return function () {
               const lat = marker.getPosition().getLat()
               const lng = marker.getPosition().getLng()
               dispatch(fetchMapWeather({ lat, lng }))
               infowindow.open(map, marker)
            }
         }
         function makeOutListener(infowindow) {
            return function () {
               infowindow.close()
            }
         }
      }
      //  if (sun) {
      //     infowindow.setContent(`일출: ${sun.sys.sunrise}, 일몰: ${sun.sys.sunset}`)
      //  } else {
      //     infowindow.setContent('Loding...')
      //  }
   }, [dispatch])

   useEffect(() => {
      if (sun) {
         infoWindows.current.forEach(({ marker, infowindow }) => {
            const markerLat = marker.getPosition().getLat()
            const markerLng = marker.getPosition().getLng()

            const markerLatResult = markerLat.toFixed(4)
            const markerLngResult = markerLng.toFixed(4)

            const sunLatResult = sun.coord.lat.toFixed(4)
            const sunLngResult = sun.coord.lon.toFixed(4)

            if (markerLatResult === sunLatResult && markerLngResult === sunLngResult) {
               const sunrise = new Date(sun.sys.sunrise * 1000).toLocaleTimeString()
               const sunset = new Date(sun.sys.sunset * 1000).toLocaleTimeString()
               infowindow.setContent(`              
                  <div class='sun_info'>
                     <span>${sun.name}</span>  
                     <span>일출: ${sunrise}</span>
                     <span>일몰: ${sunset}</span>
                  </div>
               `)
            }
         })
      }
   }, [sun])
   // console.log(sun)

   return (
      <div className="sun_map">
         <div id="map" style={{ width: '500px', height: '700px' }}></div>
         {/* <ul>
            <li>
               {locations.map((loc, index) => (
                  <li key={index}>
                     <span>{loc}</span>
                  </li>
               ))}
            </li>
         </ul> */}
      </div>
   )
}

export default SunMap
