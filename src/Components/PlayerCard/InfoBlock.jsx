import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './Avatar.css';
import CustomOverlayTrigger from './CustomOverlayTrigger';

function InfoBlock(props) {
  const realnamePopover = (
    <Popover title="Real Name" >
      <strong>{props.realname}</strong>
    </Popover>
      );
  const steamLogo = 'https://steamstore-a.akamaihd.net/public/shared/images/responsive/share_steam_logo.png';

  return (
    <div className="info-block flex-item">
      <div className="info-block-inner flex-item">

        <CustomOverlayTrigger overlay={realnamePopover}>
          <div className="overflow-item real-name">{props.realname}</div>
        </CustomOverlayTrigger>

        <span id="friend-glyph" className="glyphicon glyphicon-user" />{props.friendCount}
        <img src={steamLogo} className="img-rounded steam-logo" alt="Avatar" />{`${props.timecreated}y`}

      </div>
    </div>
  );
}

InfoBlock.propTypes = {
  realname: PropTypes.string.isRequired,
  friendCount: PropTypes.number.isRequired,
  timecreated: PropTypes.number.isRequired,
};

export default InfoBlock;
