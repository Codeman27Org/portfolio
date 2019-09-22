import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Drawer from './components/Drawer.js'

class App extends Component {
  state = {
    links: ['Portfolio', 'About', 'Contact']
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
          <div className='nav'>
            <Drawer links={this.state.links}/>
          </div>
        </header>
      </div>
    )
  }
}

export default App
