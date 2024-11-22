import Header from '../components/Header'
import SunMap from '../components/sun/SunMap'
import SunTimeList from '../components/sun/SunTimeList'
import { Wrap, Content } from '../styles/StyledComponent'

function Sun() {
   return (
      <>
         <Wrap>
            <Header />
            <Content>
               <SunMap />
               <SunTimeList />
            </Content>
         </Wrap>
      </>
   )
}

export default Sun
