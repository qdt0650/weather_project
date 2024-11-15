import { Link } from 'react-router-dom'
function Logo() {
   return (
      <div className="logo">
         <Link to="/">
            <img src="./images/logo.svg" alt="로고" />
            <span>Weather</span>
         </Link>
      </div>
   )
}

export default Logo
