import React, { Component } from 'react'
import logo from './logo.png'
import './css/App.css'
import Drawer from './components/Drawer.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import {BrowserRouter as Router} from 'react-router-dom'
//, Switch, Route, Link

class App extends Component {
  state = {
    links: ['About', 'Portfolio', 'Contact', 'Blog'],
    aboutRef: React.createRef(),
    portfolioRef: React.createRef(),
    contactRef: React.createRef(),
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className='logo-area'><img src={logo} className="App-logo" alt="logo" />
              <div className='name-container'>
                <h1 className='name-header'>Cody Roof</h1>
                <p className='name-desc'>Web | Data | Design</p>
              </div>
            </div>
            <div className='nav'>
              <Drawer links={this.state.links} refs={[this.state.aboutRef, this.state.portfolioRef, this.state.contactRef]}/>
            </div>
          </header>
            <About propRef={this.state.aboutRef} />
            <Portfolio propRef={this.state.portfolioRef}/>
            <Contact propRef={this.state.contactRef}/>
        </div>
      </Router>
    )
  }
}

export default App
