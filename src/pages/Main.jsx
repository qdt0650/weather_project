import Header from '../components/Header'
import MainCard from '../components/main/card/MainCard'
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
         <Content>
            <MainWeatherBoxWrap>
               <MainCard />
            </MainWeatherBoxWrap>
         </Content>
      </Wrap>
   )
}

export default Main
