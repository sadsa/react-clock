import React from 'react';


function ClockHand({name, angle}) {
  const handStyles = {
    transform: `rotateZ(${angle}deg)`
  };

  return (
    <div className={`clock__${name}-container`} style={handStyles}>
      <div className={`clock__${name}`}></div>
    </div>
  );
}

export default ClockHand;
