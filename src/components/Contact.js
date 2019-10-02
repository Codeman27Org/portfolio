import React, { Component } from 'react'
import '../css/Contact.css'
import { FaGithubSquare,  FaLinkedin, FaTwitterSquare, FaEnvelopeSquare, FaRegCopyright} from 'react-icons/fa'
import { IconContext } from 'react-icons'

class Contact extends Component {
  render() {
    return (
      <div id='Contact' ref={this.props.propRef}>
        <div className='contact-icons'>
          <IconContext.Provider value={{size:'3em'}}>
            <a href='https://github.com/codeman27' target='_blank' rel='noopener noreferrer'><FaGithubSquare className='contact-icon'/></a>
            <a href='https://www.linkedin.com/in/cody-roof/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='contact-icon'/></a>
            <a href='https://twitter.com/Codeman27_CO/' target='_blank' rel='noopener noreferrer'><FaTwitterSquare className='contact-icon'/></a>
            <a href='mailto:codeman2727@gmail.com' target='_blank' rel='noopener noreferrer'><FaEnvelopeSquare className='contact-icon'/></a>
          </IconContext.Provider>
        </div>
        <div className='contact-footer'>
          <p>Copyright</p><FaRegCopyright className='contact-copyright'/> <p>2019</p>
        </div>
      </div>
    )
  }
}

export default Contact
