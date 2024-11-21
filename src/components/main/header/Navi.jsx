import { Link } from 'react-router-dom'

function Navi() {
   return (
      <div className="navi">
         <Link to="/sun">
            <span>일출/일몰 시간</span>
         </Link>
         <Link to="/">
            <span>미세먼지 농도</span>
         </Link>
      </div>
   )
}

export default Navi
