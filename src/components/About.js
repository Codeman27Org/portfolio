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
          <p className='about-p'>My name is Cody Roof and I'm currently a Visualization Developer at Nordic Global
          and web developer and game developer after hours. <span className='hide-until'>I'm obsessed with Financial Independence and
          all things geeky and hoping to combine the two into the ultimate combo to achieve my dreams of travelling
          the world and only working on things that move\excite me.</span>
          </p>
        </div>
        <div className='about-desc2'>
          <p className='about-p2'><span className='about-span'>Obsessed </span>with Financial Independence and all things
          geeky and hoping to combine the two into the Ultimate Combo to achieve my dreams of travelling
          the world and only working on things that move me or excite me.
          </p>
        </div>
      </div>
    )
  }
}

export default About
