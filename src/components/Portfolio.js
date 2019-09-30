import React, { Component } from 'react'
import '../css/Portfolio.css'
import bestaurants from '../images/bestaurants.png'

class Portfolio extends Component {

  render() {
    return (
      <div className='Portfolio'>
        <div><img src={bestaurants} className='bestaurants-img' alt="profile pic"/></div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
      </div>
    )
  }
}

export default Portfolio
