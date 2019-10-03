import React, { Component } from 'react'
import Home from './components/Home.js'
import {BrowserRouter as Switch, Route} from 'react-router-dom'
import PortfolioDetail from './components/PortfolioDetail.js'
import bestaurants from './images/bestaurants.png'
import matching from './images/memory_game.png'
import pomodoro from './images/pomodoro_clock.png'
import NoMatch from './components/NoMatch.js'

class App extends Component {
  state = {
    links: ['About', 'Portfolio', 'Contact', 'Blog'],
    aboutRef: React.createRef(),
    portfolioRef: React.createRef(),
    contactRef: React.createRef(),
    projects: [{title:'Bestaurants', image:bestaurants, link:'bestaurants'}
              ,{title:'Matching Game', image:matching, link:'matching'}
              ,{title:'Pomodoro Clock', image:pomodoro, link:'pomodoro'}],
    currentProject: ''
  }

  findClickedProject = (project) => {
    this.setState({currentProject: project})
  }

  componentDidMount() {
    console.log(window.location.href)
  }

  render() {
    return (
        <div>
          <Switch>
            <Route path='/' exact>
              <Home links={this.state.links}
                aboutRef={this.state.aboutRef}
                portfolioRef={this.state.portfolioRef}
                contactRef={this.state.contactRef}
                projects={this.state.projects}
                findClickedProject={this.findClickedProject}/>
            </Route>
            <Route path={`/${this.state.currentProject.link}`} exact>
              <PortfolioDetail currentProject={this.state.currentProject}/>
            </Route>
            <Route>
              <NoMatch contactRef={this.state.contactRef}/>
            </Route>
          </Switch>
        </div>
    )
  }
}

export default App
