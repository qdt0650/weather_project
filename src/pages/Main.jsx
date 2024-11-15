import Header from '../components/Header'
import TodayWeather from '../components/main/today/TodayWeather'
import { Wrap } from '../styles/StyledComponent'

function Main() {
   return (
      <Wrap>
         <Header />
         <TodayWeather />
      </Wrap>
   )
}

export default Main
