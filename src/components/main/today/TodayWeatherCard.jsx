// 메인 오늘날씨 - 카드
import TodayBaseCardItem from './TodayBaseCardItem'

function TodayWeatherCard({ label, value }) {
   // const  [
   //    {
   //       label: '일출시간',
   //       value: '',
   //    },
   //    {
   //       label: '일몰시간',
   //       value: '',
   //    },
   //    {
   //       label: '습도',
   //       value: '',
   //    },
   // ]
   return (
      <>
         {/* 현재 위치의 강수확률, 일몰, 일출 카드 map 돌리기 */}
         <TodayBaseCardItem label={label} value={value} />
      </>
   )
}

export default TodayWeatherCard
