// 메인 오늘날씨 - 카드아이템
import '../../css/TodayWeather.css'

function TodayBaseCardItem({ label, value }) {
   return (
      <div className="todady_base_cardItem">
         <span>{label}</span>
         <span>{value}</span>
      </div>
   )
}

export default TodayBaseCardItem
