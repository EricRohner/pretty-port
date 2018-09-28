import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../constants/routes'
import './Navigation.css'

class Navigation extends Component {
  //{/*<nav>*/}

//{/*<button><Link to={ routes.LANDING }>Landing</Link></button>*/}
//{/*<button><Link to={ routes.PAGE1 }>Page1</Link></button>*/}
//{/*<button><Link to={ routes.PAGE2 }>Page2</Link></button>*/}
//{/*</nav>*/}
render(){
  return (
    <body>
      <a href="/"> Home </a>
    </body>
  )
}
}

export default Navigation
