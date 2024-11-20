import { MainWeatherBox } from '../../../styles/StyledComponent'

import '../../css/TodayWeather.css'
import WeekWeatherCard from './WeekWeatherCard'

function WeekWeather() {
   return (
      <MainWeatherBox style={{ width: '43%' }}>
         <WeekWeatherCard />
      </MainWeatherBox>
   )
}

export default WeekWeather
