// Header
import Logo from './main/header/Logo'
import Navi from './main/header/Navi'
import { Head } from '../styles/StyledComponent'
import '../components/css/Header.css'

function Header() {
   return (
      <Head>
         <Logo />
         <Navi />
      </Head>
   )
}

export default Header
