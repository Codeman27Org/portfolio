import React, { Component } from 'react'
import '../css/Contact.css'
import { FaGithubSquare,  FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaRegCopyright} from 'react-icons/fa'
import { IconContext } from 'react-icons'

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div className='contact-icons'>
          <IconContext.Provider value={{size:'3em'}}>
            <FaGithubSquare className='contact-icon'/>
            <FaFacebookSquare className='contact-icon'/>
            <FaTwitterSquare className='contact-icon'/>
            <FaEnvelopeSquare className='contact-icon'/>
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
