import React, {Component} from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x1: -28, y1: -28, x2: -28, y2: -28, x3: -32, y3: -38, x4: -50, y4: -84};
  }

  handleMouseMove(event) {
    this.setState({
      x1: Math.sin(event.clientX / window.innerWidth) * 16 - 28 + window.innerWidth/8,
      y1: Math.sin(event.clientY / window.innerHeight) * 16 + 82,
      x2: Math.sin(event.clientX / window.innerWidth + 0.78) * 16 - 18 + window.innerWidth/8,
      y2: Math.sin(event.clientY / window.innerHeight + 0.78) * 16 + 82,
      x3: Math.sin(event.clientX / window.innerWidth + 1.57) * 32 - 42 + window.innerWidth/8,
      y3: Math.sin(event.clientY / window.innerHeight + 1.57) * 32 + 52,
      x4: Math.sin(event.clientX / window.innerWidth + 2.35) * 64 - 60 + window.innerWidth/8,
      y4: Math.sin(event.clientY / window.innerHeight + 2.35) * 64 +36
    });
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <div className='top'> </div>
        <div className='bottom'> </div>
        <div className='right'> </div>
        <div className='left'> </div>
        <img src="/Burnt/Layer1.png"
             style={{
               position: 'absolute',
               left: this.state.x1,
               top: this.state.y1,
               height: '80vh',
               width: '80vw'
             }}/>
        <img src="/Burnt/Layer2.png"
             style={{
               position: 'absolute',
               left: this.state.x2,
               top: this.state.y2,
               height: '75vh',
               width: '75vw'
             }}/>
        <img src="/Burnt/Layer3.png"
             style={{
               position: 'absolute',
               left: this.state.x3,
               top: this.state.y3,
               height: '80vh',
               width: '80vw'
             }}/>
        <img src="/Burnt/Layer4.png"
             style={{
               position: 'absolute',
               left: this.state.x4,
               top: this.state.y4,
               height: '85vh',
               width: '85vw'
             }}/>
        <div className='top'> </div>
      </div>

    );
  }
}