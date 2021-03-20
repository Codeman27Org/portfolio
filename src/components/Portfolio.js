import React, { Component } from 'react'
import '../css/Portfolio.css'
import {Link} from 'react-router-dom'

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio' ref={this.props.propRef}>
        <h1 className='portfolio-text'>Web</h1>
        <div className='portfolio-grid'>
          {this.props.projects.map((project, index) => {
            return (
              <Link to={project.link} onClick={() => this.props.findClickedProject(project)} key={project.title}>
                <div className='portfolio-item'>
                  <h3 className='portfolio-text'>{project.title}</h3>
                  <img src={project.image} className='portfolio-img' alt="portfolio pic"/>
                </div>
              </Link>
            )
          })}
        </div>
        <h1 className='portfolio-text'>Data</h1>
        <div className='portfolio-grid'>
          {this.props.projectsData.map((project, index) => {
            return (
              <Link to={project.link} onClick={() => this.props.findClickedProject(project)} key={project.title}>
                <div className='portfolio-item'>
                  <h3 className='portfolio-text'>{project.title}</h3>
                  <img src={project.image} className='portfolio-img' alt="portfolio pic"/>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Portfolio
