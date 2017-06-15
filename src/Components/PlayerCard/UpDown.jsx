import React from 'react';
import PropTypes from 'prop-types';
import './UpDown.css';

import { commentType } from '../../reducers/comments';


function UpDown({ type, downClick, upClick }) {
  const upArrow = type === commentType.POSITVE ? '▲' : '△';
  const downArrow = type === commentType.NEGATIVE ? '▼' : '▽';
  return (

    <div className="comment-updown">
      <span
        className="comment-button comment-button-up"
        role="button"
        tabIndex={0}
        onClick={upClick}
      >{upArrow}</span>
      <span
        className="comment-button comment-button-down"
        role="button"
        tabIndex={0}
        onClick={downClick}
      >{downArrow}</span>
    </div>


  );
}

UpDown.propTypes = {
  type: PropTypes.oneOf(Object.keys(commentType)).isRequired,
  downClick: PropTypes.func.isRequired,
  upClick: PropTypes.func.isRequired,
};

export default UpDown;
