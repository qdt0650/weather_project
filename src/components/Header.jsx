// Header
import Logo from './main/header/Logo'
import Navi from './main/header/Navi'
import { HeadBackColor, Content } from '../styles/StyledComponent'
import '../components/css/Header.css'

function Header() {
   return (
      <HeadBackColor>
         <Content>
            <Logo />
            <Navi />
         </Content>
      </HeadBackColor>
   )
}

export default Header
