import React, { Component } from 'react';


class ClockHand extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {name, angle} = this.props;
    const handStyles = {
      transform: `rotateZ(${angle}deg)`
    }

    return (
      <div className={`clock__${name}-container`} style={handStyles}>
        <div className={`clock__${name}`}></div>
      </div>
    );
  }

  updateHandPosition = (element, newAngle) => {
    element.style.transform = 'rotateZ('+ newAngle +'deg)';
  }  
}

export default ClockHand;
