import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './Avatar.css';
import CustomOverlayTrigger from './CustomOverlayTrigger';

function Avatar(props) {
  const avatarPopover = (
    <Popover >
      <img src={props.avatarFullUrl} alt="full Avatar" />
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
          className="avatar player-info-rounded"
          alt={props.name}
        />
      </CustomOverlayTrigger>

      <CustomOverlayTrigger overlay={flagPopover}>
        {props.countryCode ?
          <span className={`flag-icon flag-icon-${props.countryCode.toLowerCase()} avatar-flag player-info-rounded`} /> :
          <span className="avatar-white-flag avatar-flag player-info-rounded" />}
      </CustomOverlayTrigger>


    </div >
  );
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  avatarFullUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
};

export default Avatar;
