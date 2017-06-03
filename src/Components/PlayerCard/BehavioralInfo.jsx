import React from 'react';
// import PropTypes from 'prop-types';

import './BehavioralInfo.css';

function BehavioralInfo() {
  return (
    <div className="text-center">
      <div className="behavioral-info-bubble-container">
        <div className="behavioral-info-bubble">
          3999
        </div>
        <div className="behavioral-info-bubble-label text-muted text-center">Behavioral Score</div>
      </div>

      <div className="behavioral-info-bubble-container">
        <div className="behavioral-info-bubble">
          3999
        </div>
        <div className="behavioral-info-bubble-label text-muted text-center">Kharma</div>
      </div>
    </div>

  );
}

BehavioralInfo.propTypes = {};

export default BehavioralInfo;
