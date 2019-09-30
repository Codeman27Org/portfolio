import React, {Component} from 'react'
import profile from '../images/profile-img.jpg'
import '../css/About.css'

class About extends Component {
  render() {
    return (
      <div className='About'>
      <div className='about-imgcontainer'>
        <img src={profile} className='about-img' alt="profile pic" />
      </div>
        <div className='about-hello'>
          <h2>Hello.</h2>
        </div>
        <div className='about-desc'>
          <p>My name is Cody Roof and I'm a Clinical Quality Analyst at United Health Group by day and a
            web developer\game developer by night.
          </p>
        </div>
      </div>
    )
  }
}

export default About
