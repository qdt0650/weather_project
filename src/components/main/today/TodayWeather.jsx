import { MainWeatherBox } from '../../../styles/StyledComponent'
import CurrentLocation from './CurrentLocation'
import TodayWeatherCard from './TodayWeatherCard'
import '../../css/TodayWeather.css'

// 메인 오늘날씨
function TodayWeather() {
   return (
      <MainWeatherBox style={{ width: '55%', marginRight: '2%' }}>
         <CurrentLocation />
         <TodayWeatherCard />
      </MainWeatherBox>
   )
}

export default TodayWeather
