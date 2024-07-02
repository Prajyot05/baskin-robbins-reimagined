import React from 'react';

function Milkshake() {
  return (
    <div className="milkshake-page overflow-x-hidden">
      <div className="background-video-container">
        <video className="background-video" src="/assets/milkshake.mp4" autoPlay muted loop></video>
      </div>
      <div className="content">
        <h1>Welcome to the Milkshake Page</h1>
      </div>
    </div>
  );
}

export default Milkshake;