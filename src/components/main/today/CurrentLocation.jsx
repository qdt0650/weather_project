// 메인 오늘날씨 - 현재위치
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
function CurrentLocation() {
   return (
      <>
         <div className="current_location">
            <LocationOnOutlinedIcon />
            <span>현재 위치</span>
         </div>
      </>
   )
}

export default CurrentLocation
