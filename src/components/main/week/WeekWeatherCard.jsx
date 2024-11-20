import WeekWeatherSlider from '../../slider/WeekWeatherSlider'
function WeekWeatherCard() {
   return (
      <div className="week_weather_card">
         <span className="title">
            주간날씨 <i>(3시간 마다)</i>
         </span>
         <WeekWeatherSlider />
      </div>
   )
}

export default WeekWeatherCard
