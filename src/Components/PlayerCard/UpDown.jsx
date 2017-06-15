import React from 'react';
// import PropTypes from 'prop-types';
import './UpDown.css';


function UpDown() {
  return (

    <div className="comment-updown">
      <span className="comment-button comment-button-up" role="button" tabIndex={0} onClick={() => console.log('test')}>&#x25B3;</span>
      <span className="comment-button comment-button-down" role="button" tabIndex={0} onClick={() => console.log('test')}>&#x25BD;</span>
    </div>


  );
}

Comment.propTypes = {};

export default UpDown;
