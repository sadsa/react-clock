import React, { Component } from 'react';
import ClockHand from './ClockHand'; 
import ClockService from './ClockService';
import './Clock.css';
 

const INTERVAL_DELAY = 1000;

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
    this.tick();
    setInterval(this.tick.bind(this), INTERVAL_DELAY);
  }

  tick() {
    const date = new Date();
    this.setHandPositions(date);
  }

  setHandPositions(date) {
    const angles = {
      seconds: ClockService.calcAngleForSeconds(date),
      minutes: ClockService.calcAngleForMinutes(date),
      hours: ClockService.calcAngleForHours(date)
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
