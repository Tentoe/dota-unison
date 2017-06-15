import React from 'react';
import PropTypes from 'prop-types';
import DownIcon from 'react-icons/lib/io/arrow-down-b';
import UpIcon from 'react-icons/lib/io/arrow-up-b';

import { commentType } from '../../reducers/comments';


function UpDown({ type, downClick, upClick }) {
  const upIconColor = type === commentType.POSITVE ? 'green' : 'lightgrey';
  const downIconColor = type === commentType.NEGATIVE ? 'red' : 'lightgrey';
  return (

    <div className="comment-updown">

      <UpIcon size={20} onClick={upClick} color={upIconColor} />

      <DownIcon size={20} onClick={downClick} color={downIconColor} />

    </div>


  );
}

UpDown.propTypes = {
  type: PropTypes.oneOf(Object.keys(commentType).map(val => commentType[val])).isRequired,
  downClick: PropTypes.func.isRequired,
  upClick: PropTypes.func.isRequired,
};

export default UpDown;
