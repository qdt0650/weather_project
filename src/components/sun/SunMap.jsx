import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMapWeather } from '../../features/sunSlice'

const { kakao } = window

function SunMap() {
   const dispatch = useDispatch()
   const { sun, loading, error } = useSelector((state) => state.sun)

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
            title: '시흥',
            latlng: new kakao.maps.LatLng(37.3773, 126.805),
         },
         {
            title: '속초',
            latlng: new kakao.maps.LatLng(38.2042, 128.5884),
         },
         {
            title: '인천',
            latlng: new kakao.maps.LatLng(37.4561, 126.7059),
         },
         {
            title: '시흥',
            latlng: new kakao.maps.LatLng(37.3773, 126.805),
         },
         {
            title: '포항',
            latlng: new kakao.maps.LatLng(36.0056, 129.3616),
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
            title: '울릉도',
            latlng: new kakao.maps.LatLng(37.5064, 130.8572),
         },
         {
            title: '대전',
            latlng: new kakao.maps.LatLng(36.3578, 127.3867),
         },
         {
            title: '해남',
            latlng: new kakao.maps.LatLng(34.5704, 126.6012),
         },
         {
            title: '김천',
            latlng: new kakao.maps.LatLng(36.1368, 128.1158),
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

         // 마커 mouseover 해당 지역 city.name , sunrise, sunset 가져오기
         let infowindow = new kakao.maps.InfoWindow({
            content: 'ddd',
         })

         kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
         kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))

         function makeOverListener(map, marker, infowindow) {
            return function () {
               const lat = marker.getPosition().getLat()
               const lng = marker.getPosition().getLng()
               dispatch(fetchMapWeather({ lat, lng }))
               if (sun) {
                  infowindow.setContent(`일출: ${sun.sys.sunrise}, 일몰: ${sun.sys.sunset}`)
               } else {
                  infowindow.setContent('ㄴㄴㄴ')
               }
               infowindow.open(map, marker)
            }
         }
         function makeOutListener(infowindow) {
            return function () {
               infowindow.close()
            }
         }
      }
   }, [dispatch])

   console.log(sun)

   return (
      <>
         <div id="map" style={{ width: '500px', height: '700px' }}></div>
      </>
   )
}

export default SunMap
