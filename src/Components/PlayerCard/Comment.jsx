import React from 'react';
// import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';

import UpDown from './UpDown';


function Comment() {
  return (
    <div className="info-item">
      <InputGroup>
        <InputGroup.Addon>
          <UpDown />
        </InputGroup.Addon>
        <FormControl type="text" />
      </InputGroup>
    </div>

  );
}

Comment.propTypes = {};

export default Comment;
