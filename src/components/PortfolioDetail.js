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
        <h1 className='portfolio-text'>{this.props.currentProject.title}</h1>
        <img src={this.props.currentProject.image} className='portfolio-img' alt="portfolio pic"/>
      </div>
    )
  }
}

export default PortfolioDetail
