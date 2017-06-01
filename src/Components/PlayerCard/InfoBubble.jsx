import React from 'react';
import PropTypes from 'prop-types';


function InfoBubble(props) {
  return (
    <div className="rounded border-item" >


      {props.topValue}
      {props.bottomValue}
      {props.topLabel}
      {props.bottomLabel}
    </div>
  );
}

InfoBubble.propTypes = {
  topValue: PropTypes.string.isRequired,
  bottomValue: PropTypes.string.isRequired,
  topLabel: PropTypes.string.isRequired,
  bottomLabel: PropTypes.string.isRequired,
};

export default InfoBubble;
