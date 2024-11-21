import Header from '../components/Header'
import SunMap from '../components/sun/SunMap'
import { Wrap, Content } from '../styles/StyledComponent'

function Sun() {
   return (
      <>
         <Wrap>
            <Header />
            <Content>
               <SunMap />
            </Content>
         </Wrap>
      </>
   )
}

export default Sun
