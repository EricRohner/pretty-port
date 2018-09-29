import React, { Component } from 'react'
import './Landing.css'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x1: 160,
      x2: 167,
      x3: 174,
      x4: 144,
      y1: 107,
      y2: 118,
      y3: 127,
      y4: 80,
      foodHide: true
    }
  }

  handleMouseMove(event) {
    const heightOffset = window.innerHeight / 6
    const widthOffset = window.innerWidth / 8
    this.setState({
      x1: Math.sin(event.clientX / window.innerWidth) * 16 - 28 + widthOffset,
      y1: Math.sin(event.clientY / window.innerHeight) * 16 - 28 + heightOffset,
      x2: Math.sin(event.clientX / window.innerWidth + 0.78) * 16 - 28 + widthOffset,
      y2: Math.sin(event.clientY / window.innerHeight + 0.78) * 16 - 28 + heightOffset,
      x3: Math.sin(event.clientX / window.innerWidth + 1.57) * 32 - 32 + widthOffset,
      y3: Math.sin(event.clientY / window.innerHeight + 1.57) * 32 - 38 + heightOffset,
      x4: Math.sin(event.clientX / window.innerWidth + 2.35) * 64 - 50 + widthOffset,
      y4: Math.sin(event.clientY / window.innerHeight + 2.35) * 64 - 95 + heightOffset
    })
    console.log(this.state)
  }

  foodHideFalse = () => {this.setState({ foodHide: false })}
  foodHideTrue = () => {this.setState({ foodHide: true })}

  render() {
    return (
      <body>
        <div onMouseMove={this.handleMouseMove}>
          <div className='top'></div>
          <div className='bottom'></div>
          <div className='right'></div>
          <div className='left'>
            <p className="hoverP"
               onMouseEnter={this.foodHideFalse}
               onMouseLeave={this.foodHideTrue}>
              Food</p>
          </div>
          <img src="/CaesarPalace/Layer1.png"
               style={{
                 position: 'absolute',
                 left: this.state.x1,
                 top: this.state.y1,
                 height: '75vh',
                 width: '75vw'
               }} />
          <img src="/CaesarPalace/Layer2.png"
               style={{
                 position: 'absolute',
                 left: this.state.x2,
                 top: this.state.y2,
                 height: '75vh',
                 width: '75vw'
               }} />
          <img src="/CaesarPalace/Layer3.png"
               style={{
                 position: 'absolute',
                 left: this.state.x3,
                 top: this.state.y3,
                 height: '75vh',
                 width: '75vw'
               }} />
          <div className="foodContainer" hidden={this.state.foodHide}>
            <img className="sashimi" src="/CaesarPalace/sashimi.png" />
            <img className="veggies" src="CaesarPalace/veggies.png" />
            <img className="stirfry" src="CaesarPalace/stirfry.png" />
          </div>
          <img src="/CaesarPalace/Layer4.png"
               className="tree"
               style={{
                 position: 'absolute',
                 left: this.state.x4,
                 top: this.state.y4,
                 height: '85vh',
                 width: '85vw',
               }} />
        </div>
        <footer>
          <p className="contact">Contact:</p>
          <div className='footerContainer'>
            <div>
              <p>(360) 791-5099</p>
              <p>EricRohner22@gmail.com</p>
            </div>
            <div>
              <p>Marmelade District</p>
              <p>Salt Lake City, UT</p>
            </div>
          </div>
        </footer>
      </body>
    )
  }
}