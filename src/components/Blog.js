import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {
  constructor(props) {
      super(props);
      this.state = {pattyhide: true};
    }

  pattyHideFalse = () => {this.setState({ pattyhide: false })}
  pattyHideTrue = () => {this.setState({ pattyhide: true })}

  render() {
    return (
      <body>
        <div className='top'></div>
        <div className='left'>
          <p onMouseEnter={this.pattyHideFalse}
             onMouseLeave={this.pattyHideTrue}>
            Patty's Ridge</p>
          <p>Steort's Ridge</p>
          <p>Standard Ridge</p>
          <p>Outisde Corner</p>
        </div>
        <div className="images">
          <img hidden={this.state.pattyhide} src="/Blog/patty.jpg"/>

        </div>

      </body>
    )
  }
}

export default Blog