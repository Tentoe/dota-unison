import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './InfoBlock.css';

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
      <div className="info-block-inner flex-item medium-size-font">

        <CustomOverlayTrigger overlay={realnamePopover}>
          <div className="overflow-item">{props.realname}</div>
        </CustomOverlayTrigger>

        <span><span className="glyphicon glyphicon-user" />{props.friendCount}</span>
        <span><img src={steamLogo} className="img-rounded info-block-steam-logo" alt="Avatar" />{`${props.timecreated}y`}</span>

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
