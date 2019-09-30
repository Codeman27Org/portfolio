import React, { Component } from 'react'
import logo from './logo.png'
import './css/App.css'
import Drawer from './components/Drawer.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'

class App extends Component {
  state = {
    links: ['Portfolio', 'About', 'Contact']
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logo-area'><img src={logo} className="App-logo" alt="logo" />
            <div className='name-container'>
              <h1 className='name-header'>Cody Roof</h1>
              <p className='name-desc'>Web | Data | Design</p>
            </div>
          </div>
          <div className='nav'>
            <Drawer links={this.state.links}/>
          </div>
        </header>
        <About/>
        <Portfolio/>
      </div>
    )
  }
}

export default App
