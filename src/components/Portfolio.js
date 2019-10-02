import React, { Component } from 'react'
import '../css/Portfolio.css'
import bestaurants from '../images/bestaurants.png'
import memory from '../images/memory_game.png'
import pomodoro from '../images/pomodoro_clock.png'

class Portfolio extends Component {

  render() {
    return (
      <div className='Portfolio' ref={this.props.propRef}>
        <div>
          <p className='portfolio-text'>Bestaurants</p>
          <img src={bestaurants} className='portfolio-img' alt="profile pic"/>
        </div>
        <div>
          <p className='portfolio-text'>Matching Game</p>
          <img src={memory} className='portfolio-img' alt="profile pic"/>
        </div>
        <div>
          <p className='portfolio-text'>Pomodoro Clock</p>
          <img src={pomodoro} className='portfolio-img' alt="profile pic"/>
        </div>
      </div>
    )
  }
}

export default Portfolio
