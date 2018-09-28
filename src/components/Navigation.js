import React, { Component } from 'react'
import * as routes from '../constants/routes'
import './Navigation.css'

class Navigation extends Component {
render(){
  return (
    <body>
      <a href={routes.LANDING}> Home </a>
      <a href={routes.BLOG}> Blog </a>
      <a href={routes.ABOUT}> About </a>
    </body>
  )
}
}

export default Navigation
