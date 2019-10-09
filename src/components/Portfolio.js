import React, { Component } from 'react'
import '../css/Portfolio.css'
import {Link} from 'react-router-dom'

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio' ref={this.props.propRef}>
        {this.props.projects.map((project, index) => {
          return (
            <Link to={project.link} onClick={() => this.props.findClickedProject(project)} key={project.title}>
              <div className='portfolio-item'>
                <p className='portfolio-text'>{project.title}</p>
                <img src={project.image} className='portfolio-img' alt="portfolio pic"/>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Portfolio
