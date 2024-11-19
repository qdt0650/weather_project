import { MainWeatherBox } from '../../../styles/StyledComponent'
import CurrentLocation from './CurrentLocation'
import CurrentTemperature from './CurrentTemperature'
import CurrentHumiture from './CurrentHumiture'
import TodayWeatherCard from './TodayWeatherCard'
import '../../css/TodayWeather.css'

// 메인 오늘날씨
function TodayWeather() {
   return (
      <MainWeatherBox style={{ width: '55%', marginRight: '2%' }}>
         <CurrentLocation />
         <CurrentTemperature />
         <CurrentHumiture />
         <TodayWeatherCard />
      </MainWeatherBox>
   )
}

export default TodayWeather
