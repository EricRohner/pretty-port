import React, { Component } from 'react'
import * as routes from '../constants/routes'
import Navigation from './Navigation'
import Landing from './Landing'
import Page1 from './Page1'
import Page2 from './Page2'

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
          <Route exact path={routes.PAGE1} component={() => <Page1 />} />
          <Route exact path={routes.PAGE2} component={() => <Page2 />} />
        </div>
      </Router>
    )
  }
}
export default App