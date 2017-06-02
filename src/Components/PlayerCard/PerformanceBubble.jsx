import React from 'react';
import PropTypes from 'prop-types';

import './PerformanceBubble.css';

function PerformanceBubble(props) {
  return (
    <div className="outer-info-bubble">
      <div className="info-bubble-label text-muted text">
        {props.topLabel}
      </div>
      <div className="info-bubble-top">
        {props.topValue}
      </div>
      <div className="info-bubble-bottom">
        {props.bottomValue}
      </div>
      <div className="info-bubble-label text-muted">
        {props.bottomLabel}
      </div>
    </div>

  );
}

PerformanceBubble.propTypes = {
  topValue: PropTypes.string.isRequired,
  bottomValue: PropTypes.string.isRequired,
  topLabel: PropTypes.string.isRequired,
  bottomLabel: PropTypes.string.isRequired,
};

export default PerformanceBubble;
