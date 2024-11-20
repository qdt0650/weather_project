import '../../css/MainCard.css'

function MainCardItem({ icon, iconAlt, content }) {
   return (
      <div className="main_card_item">
         <p>
            <img src={icon} alt={iconAlt} />
         </p>
         <p>{content}</p>
      </div>
   )
}

export default MainCardItem
