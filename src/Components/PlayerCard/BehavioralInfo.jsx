import React from 'react';
// import PropTypes from 'prop-types';

import './BehavioralInfo.css';

function BehavioralInfo() {
  return (
    <div >
      <div className="bubble-container">
        <div className="bubble">
          3999
        </div>
        <div className="bubble-label text-muted text-center">Behavioral Score</div>
      </div>

      <div className="bubble-container">
        <div className="bubble">
          3999
        </div>
        <div className="bubble-label text-muted text-center">Kharma</div>
      </div>
    </div>

  );
}

BehavioralInfo.propTypes = {};

export default BehavioralInfo;
