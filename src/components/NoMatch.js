import React, {Component} from 'react'
import '../css/NoMatch.css'
import Header from './Header.js'
import Contact from './Contact.js'

class NoMatch extends Component {
  state = {
    links: ['Home']
  }

  render() {
    return (
      <div className='NoMatch'>
        <Header links={this.state.links}/>
        <p>ERROR 404. Page not found.</p>
        <Contact propRef={this.props.contactRef}/>
      </div>
    )
  }
}

export default NoMatch
