import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from 'react-bootstrap';

function CustomOverlayTrigger(props) {
  return (
    <OverlayTrigger trigger={['click']} placement="bottom" overlay={props.overlay}>
      {props.children}
    </OverlayTrigger>
  );
}
CustomOverlayTrigger.propTypes = {
  children: PropTypes.element.isRequired,
  overlay: PropTypes.element.isRequired,
};

export default CustomOverlayTrigger;
