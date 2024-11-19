import Header from '../components/Header'
import TodayWeather from '../components/main/today/TodayWeather'
import WeekWeather from '../components/main/week/WeekWeather'
import { Wrap, MainWeatherBoxWrap, Content } from '../styles/StyledComponent'

function Main() {
   return (
      <Wrap>
         <Header />
         <Content>
            <MainWeatherBoxWrap>
               <TodayWeather />
               <WeekWeather />
            </MainWeatherBoxWrap>
         </Content>
      </Wrap>
   )
}

export default Main
