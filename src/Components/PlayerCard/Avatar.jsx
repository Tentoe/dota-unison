import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import countries from 'i18n-iso-countries';
import flags from '../../flags/flags';
import './Avatar.css';
import CustomOverlayTrigger from './CustomOverlayTrigger';

function Avatar(props) {
  const flag = flags[props.countryCode.toLowerCase()] || flags.unknown;
  const avatarPopover = (
    <Popover id="avatarPopoverID">
      <img src={props.avatarUrl} alt="full Avatar" />
    </Popover>
  );
  const flagPopover = (
    <Popover id="avatarflagPopoverID" title="Popover for Flag">
      <div><img src={flag} alt="flag" className="avatar-large-flag" /></div>
      <strong>{countries.getName(props.countryCode, 'en')}</strong>

    </Popover>
        );
  return (
    <div className="media-left avatar-block">

      <CustomOverlayTrigger overlay={avatarPopover}>
        <img src={props.avatarUrl} className="avatar player-info-rounded" alt={props.name} />
      </CustomOverlayTrigger>

      <CustomOverlayTrigger overlay={flagPopover}>
        <img src={flag} className="avatar-flag player-info-rounded" alt="flag" />
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
