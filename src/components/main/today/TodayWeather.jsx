import CurrentLocation from './CurrentLocation'
import { MainTodayWeather } from '../../../styles/StyledComponent'

// 메인 오늘날씨
function TodayWeather() {
   return (
      <MainTodayWeather>
         <CurrentLocation />
      </MainTodayWeather>
   )
}

export default TodayWeather
