import React, { Component } from 'react'
import Home from './components/Home.js'
import {BrowserRouter as Switch, Route, Redirect} from 'react-router-dom'
import PortfolioDetail from './components/PortfolioDetail.js'
import textObject from './text_content.js'
//import bestaurants from './images/bestaurants.png'
import matching from './images/memory_game.png'
import pomodoro from './images/pomodoro_clock.png'
import titanic from './images/titanic.png'
import roofcalc from './images/roofcalc.png'

class App extends Component {
  state = {
    links: ['About', 'Portfolio', 'Contact', 'Blog'],
    aboutRef: React.createRef(),
    portfolioRef: React.createRef(),
    contactRef: React.createRef(),
    projects: [{title:'Matching Game', image:matching, link:'matching', text:textObject.matchingGame
              , outsideLink:'http://matching-game.cody-roof.com/', codeLink:'https://github.com/codeman27/Udacity_FrontEndDeveloper_Project2'}
              ,{title:'Pomodoro Clock', image:pomodoro, link:'pomodoro', text:textObject.pomodoro
              , outsideLink:'http://pomodoro.cody-roof.com', codeLink:'https://github.com/codeman27/pomodoro'}
              , {title:'RoofCalc', image:roofcalc, link:'roofcalc', text:textObject.roofcalcText
              , outsideLink:'http://roofcalc.cody-roof.com/', codeLink:'https://github.com/codeman27/RoofCalc'}],
    projectsData: [{title:'Titanic Predictions', image:titanic, link:'titanic', text:textObject.titanic
              , outsideLink:'http://titanic.cody-roof.com/', codeLink:'https://github.com/codeman27/Kaggle_TitanicML'}],
    currentProject: ''
  }

  findClickedProject = (project) => {
    this.setState({currentProject: project})
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' >
              <Home links={this.state.links}
                aboutRef={this.state.aboutRef}
                portfolioRef={this.state.portfolioRef}
                contactRef={this.state.contactRef}
                projects={this.state.projects}
                projectsData={this.state.projectsData}
                findClickedProject={this.findClickedProject}/>
            </Route>
            <Route path={`/${this.state.currentProject.link}`}>
              <PortfolioDetail currentProject={this.state.currentProject}/>
            </Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
    )
  }
}

export default App
