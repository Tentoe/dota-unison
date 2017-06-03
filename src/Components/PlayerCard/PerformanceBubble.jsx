import React from 'react';
import PropTypes from 'prop-types';

import './PerformanceBubble.css';

function PerformanceBubble(props) {
  return (
    <div className="performance-bubble-outer">
      <div className="performance-bubble-label text-muted small-size-font">
        {props.topLabel}
      </div>
      <div className="performance-bubble-top big-size-font">
        {props.topValue}
      </div>
      <div className="performance-bubble-bottom big-size-font">
        {props.bottomValue}
      </div>
      <div className="performance-bubble-label text-muted small-size-font">
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
