import React from 'react'

export default function Card(props){
    const item = props.item
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.imgSrc} className="card--image" />
            <div>
                <span>Rating: {item.stats.rating + ' (' + item.stats.reviewCount + ')'} Online</span>
                <h3>{item.title}</h3>
                <p>From: {item.price} $us/person</p>
            </div>
        </div>
    )
}