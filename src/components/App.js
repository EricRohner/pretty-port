import React, { Component } from 'react'
import * as routes from '../constants/routes'
import Navigation from './Navigation'
import Landing from './Landing'
import Blog from './Blog'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route exact path={routes.LANDING} component={() => <Landing />} />
          <Route exact path={routes.BLOG} component={() => <Blog />} />
          <Route exact path={routes.ABOUT} component={() => <About />} />
        </div>
      </Router>
    )
  }
}
export default App