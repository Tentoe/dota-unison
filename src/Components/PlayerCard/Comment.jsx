import React from 'react';
// import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';

import './Comment.css';

function Comment() {
  return (
    <div className="info-item">
      <InputGroup>
        <InputGroup.Addon>
          <input type="checkbox" aria-label="..." />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </div>

  );
}

Comment.propTypes = {};

export default Comment;
