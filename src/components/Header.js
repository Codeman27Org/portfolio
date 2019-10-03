import React, { Component } from 'react'
import logo from '../logo.png'
import '../css/Header.css'
import Drawer from './Drawer.js'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logo-area'><Link to='/' className='link'><img src={logo} className="App-logo" alt="logo" /></Link>
            <div className='name-container'>
              <h1 className='name-header'>Cody Roof</h1>
              <p className='name-desc'>Web | Data | Design</p>
            </div>
          </div>
          <div className='nav'>
          {
            <Drawer links={this.props.links} refs={this.props.refs}/>
          }
          </div>
        </header>
      </div>
    )
  }
}

export default Header
