import React, { Component } from 'react'
import Home from './components/Home.js'
import {BrowserRouter as Switch, Route} from 'react-router-dom'
import PortfolioDetail from './components/PortfolioDetail.js'

class App extends Component {
  state = {
    links: ['About', 'Portfolio', 'Contact', 'Blog'],
    aboutRef: React.createRef(),
    portfolioRef: React.createRef(),
    contactRef: React.createRef(),
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/'>
              <Home links={this.state.links}
                aboutRef={this.state.aboutRef}
                portfolioRef={this.state.portfolioRef}
                contactRef={this.state.contactRef}/>
            </Route>
            <Route path='/bestaurants'>
              <PortfolioDetail/>
            </Route>
          </Switch>
        </div>
    )
  }
}

export default App
