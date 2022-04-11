import React from 'react'

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imgSrc} className="card--image" />
            <div>
                <span>Rating: {props.rating + ' (' + props.reviewCount + ')'} Online</span>
                <h3>{props.title}</h3>
                <p>From: {props.price} $us/person</p>
            </div>
        </div>
    )
}