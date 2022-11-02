import React from 'react'

function Card(props) {
  let badgeText
  if (props.element.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.element.location == "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div>
        <div className='card'>
            <div className='card_items'>
                {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img src= {`../../public/images/${props.element.coverImg}`} alt="Not found" className='photo-item' />
                <div className='card-stats'>
                  <img src= {"../../public/images/star.png"} className="card-star" />
                  <span>{props.element.stats.rating}</span>
                  <span className="gray"> ({props.element.stats.reviewCount}) • </span>
                  <span className="gray">{props.element.location}</span>
                </div>
                <p className='card-stats_description'>{props.element.title}</p>
                <p className='card-stats_price'> <b>From ${props.element.price}</b> / person</p>
            </div>
        </div>
    </div>
  )
}

export default Card