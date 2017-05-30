import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './Avatar.css';
import CustomOverlayTrigger from './CustomOverlayTrigger';

function Avatar(props) {
  const avatarPopover = (
    <Popover title="Popover for Avatar">
      <strong>Holy guacamole!</strong> Check this info.
      </Popover>
      );
  const flagPopover = (
    <Popover title="Popover for Flag">
      <strong>Probably on which servers they played</strong> Check this info.
          </Popover>
          );
  return (
    <div className="media-left avatar-block" >

      <CustomOverlayTrigger overlay={avatarPopover}>
        <img
          src={props.avatarUrl}
          className="avatar rounded"
          alt={props.name}
        />
      </CustomOverlayTrigger>

      <CustomOverlayTrigger overlay={flagPopover}>
        <span className={`flag-icon flag-icon-${props.countryCode.toLowerCase()} flag-item rounded`} />
      </CustomOverlayTrigger>


    </div >
  );
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Avatar;
