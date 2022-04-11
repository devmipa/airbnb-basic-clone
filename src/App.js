import React from 'react'
import Card from './components/Card'
import NavBar from './components/NavBar'
import data from './data'
import './index.css'

export default function App() {
    const cards = data.map(item => 
    <Card key = {item.id}
          imgSrc = "./nature.jpeg" 
          rating = {item.stats.rating}
          reviewCount = {item.stats.reviewCount}
          title = {item.title}
          price = {item.price}
    />)
    return(
       <div>
           <NavBar />
           <section className="card-items">
            {cards}
           </section>
       </div>
    )
}