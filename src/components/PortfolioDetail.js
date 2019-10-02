import React, { Component } from 'react'
import Header from './Header.js'
import '../css/PortfolioDetail.css'

class PortfolioDetail extends Component {
  state = {
    links: ['Home']
  }

  render() {
    return (
      <div className='PortfolioDetail'>
        <Header links={this.state.links}/>
        <p>I'm portfolio Detail!</p>
      </div>
    )
  }
}

export default PortfolioDetail
