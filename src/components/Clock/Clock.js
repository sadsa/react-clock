import React, { Component } from 'react';
import ClockHand from './ClockHand'; 
import './Clock.css';


function calcAngleForSeconds(date) {
  const seconds = date.getSeconds();
  return (seconds * 6);
}

function calcAngleForMinutes(date) {
  const minutes = date.getMinutes();
  return (minutes * 6);
}

function calcAngleForHours(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (hours * 30) + (minutes / 2);
}  

class Clock extends Component {
  state = {
    hands: [
      { id: 0, name: 'hours', angle: 0 },
      { id: 1, name: 'minutes', angle: 0 },
      { id: 2, name: 'seconds', angle: 0 }
    ]
  }

  componentDidMount() {
    this.startClock();
  }

  render() {
    return (
      <article className="clock">
        {this.state.hands.map((hand) => 
          <ClockHand 
            key={hand.id}
            name={hand.name} 
            angle={hand.angle}
          />
        )}
      </article>
    );
  }

  startClock() {
    const date = new Date();
    this.setHandPositions(date);
  }

  setHandPositions(date) {
    const angles = {
      seconds: calcAngleForSeconds(date),
      minutes: calcAngleForMinutes(date),
      hours: calcAngleForHours(date)
    };

    this.updateHandAngles(angles);
  }

  updateHandAngles(angles) {
    this.setState((prevState) => ({
      hands: prevState.hands.map(hand => {
        hand.angle = angles[hand.name]
        return hand;
      })
    }));
  }

}


export default Clock;
