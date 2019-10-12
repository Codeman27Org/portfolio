import React, { Component } from 'react'
import Header from './Header.js'
import '../css/PortfolioDetail.css'
import Contact from './Contact.js'

class PortfolioDetail extends Component {
  state = {
    links: ['Home']
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div className='PortfolioDetail'>
        <Header links={this.state.links}/>
        <div className='detail-body'>
          <h2 className='portfolio-detail-text'>{this.props.currentProject.title}</h2>
          <div className='image-container'>
            <img src={this.props.currentProject.image} className='detail-img' alt="portfolio pic"/>
          </div>
          <div className='detail-description'>
            <div className='detail-text'>
              <p>{this.props.currentProject.text}</p>
              <a className='detail-link' href={this.props.currentProject.outsideLink} target='_blank' rel='noopener noreferrer'>Site</a>
              <a className='detail-link'  href={this.props.currentProject.codeLink} target='_blank' rel='noopener noreferrer'>Code</a>
            </div>
          </div>
        </div>
        <div className='detail-contact'>
          <Contact propRef={this.props.contactRef}/>
        </div>
      </div>
    )
  }
}

export default PortfolioDetail
