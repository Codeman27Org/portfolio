import React, {Component} from 'react'
import profile from '../images/profile-img2.jpg'
import '../css/About.css'

class About extends Component {
  render() {
    return (
      <div className='About' ref={this.props.propRef}>
      <div className='about-imgcontainer'>
        <img src={profile} className='about-img' alt="profile pic" />
      </div>
        <div className='about-hello'>
          <h2>Hello.</h2>
        </div>
        <div className='about-desc'>
          <p>My name is Cody Roof and I'm a Clinical Quality Analyst at United Health Group for my 9 to 5
          and web developer and game developer after hours.
          </p>
        </div>
        <div className='about-desc2'>
          <p>Obsessed with Financial Independence and all things
          geeky and hoping to combine the two into the ultimate combo to achieve my dreams of travelling
          the world and only working on things that move\exite me.
          </p>
        </div>
      </div>
    )
  }
}

export default About
