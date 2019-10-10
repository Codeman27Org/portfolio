import React, { Component } from 'react'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Header from './Header.js'

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div className="App">
        <Header links={this.props.links} refs={[this.props.aboutRef, this.props.portfolioRef, this.props.contactRef]}/>
        <About propRef={this.props.aboutRef}/>
        <Portfolio propRef={this.props.portfolioRef} projects={this.props.projects} findClickedProject={this.props.findClickedProject}/>
        <Contact propRef={this.props.contactRef}/>
      </div>
    )
  }
}

export default Home
