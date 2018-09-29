import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {
  constructor(props) {
      super(props);
      this.state = {pattyhide: true, outsidehide: true, buenahide: true, steorthide: true, standardhide: true, vectorhide: true};
    }

  pattyHideFalse = () => {this.setState({ pattyhide: false })}
  pattyHideTrue = () => {this.setState({ pattyhide: true })}
  vectorHideFalse = () => {this.setState({ vectorhide: false })}
  vectorHideTrue = () => {this.setState({ vectorhide: true })}
  outsideHideFalse = () => {this.setState({ outsidehide: false })}
  outsideHideTrue = () => {this.setState({ outsidehide: true })}
  buenaHideFalse = () => {this.setState({ buenahide: false })}
  buenaHideTrue = () => {this.setState({ buenahide: true })}
  steortHideFalse = () => {this.setState({ steorthide: false })}
  steortHideTrue = () => {this.setState({ steorthide: true })}
  standardHideFalse = () => {this.setState({ standardhide: false })}
  standardHideTrue = () => {this.setState({ standardhide: true })}

  render() {
    return (
      <body>
        <div className='top'></div>
        <div className='left'>
          <p className="hoverP"
            onMouseEnter={this.pattyHideFalse}
             onMouseLeave={this.pattyHideTrue}>
            Patty's Ridge</p>
          <p className="hoverP"
            onMouseEnter={this.vectorHideFalse}
             onMouseLeave={this.vectorHideTrue}>
            Vector Madness</p>
          <p className="hoverP"
            onMouseEnter={this.buenaHideFalse}
             onMouseLeave={this.buenaHideTrue}>
            Buena Vista</p>
          <p className="hoverP"
            onMouseEnter={this.steortHideFalse}
             onMouseLeave={this.steortHideTrue}>
            Steort's Ridge</p>
          <p className="hoverP"
            onMouseEnter={this.standardHideFalse}
             onMouseLeave={this.standardHideTrue}>
            Standard Ridge</p>
          <p className="hoverP"
            onMouseEnter={this.outsideHideFalse}
             onMouseLeave={this.outsideHideTrue}>
            Outisde Corner</p>
        </div>
        <div className="images" hidden={this.state.pattyhide}>
          <img className="image" src="/Blog/pattyfull.jpg"/>
          <img className="image" src="/Blog/patty.jpg"/>
          <img className="image" src="/Blog/pattytop.jpg"/>
        </div>
        <div className="vectorimages" hidden={this.state.vectorhide}>
          <img className="image" src="/Blog/vectorbase.jpg"/>
          <img className="image" src="/Blog/vectortraverse.jpg"/>
          <img className="image" src="/Blog/vectortop.jpg"/>
        </div>
        <div className="outsideimages" hidden={this.state.outsidehide}>
          <img className="image" src="/Blog/outsidetop.jpg"/>
          <img className="image" src="/Blog/outsidewave.jpg"/>
        </div>
        <div className="buenaimages" hidden={this.state.buenahide}>
          <img className="buenaimage" src="/Blog/buenavistafull.jpg"/>
          <img className="buenaimage" src="/Blog/buenavistatop.jpg"/>
        </div>
        <div className="steortimages" hidden={this.state.steorthide}>
          <img className="steortimage" src="/Blog/steortbase.jpg"/>
          <img className="steortimage" src="/Blog/steortp3.jpg"/>
        </div>
        <div className="standardimages" hidden={this.state.standardhide}>
          <img className="image" src="/Blog/standardp3.jpg"/>
          <img className="image" src="/Blog/standardlichen.jpg"/>
          <img className="image" src="/Blog/standardtop.jpg"/>
        </div>
      </body>
    )
  }
}

export default Blog