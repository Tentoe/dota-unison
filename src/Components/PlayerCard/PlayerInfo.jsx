import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';
import { Popover } from 'react-bootstrap';

import './PlayerInfo.css';

import Avatar from './Avatar';
import CustomOverlayTrigger from './CustomOverlayTrigger';


function PlayerInfo(props) {
  const player = props.player;


  const steamLogo = 'https://steamstore-a.akamaihd.net/public/shared/images/responsive/share_steam_logo.png';

  const realnamePopover = (
    <Popover title="Real Name" >
      <strong>{player.realname}</strong>
    </Popover>
      );

  return (
    <div className="player-info rounded">
      <Avatar
        name={player.name}
        avatarUrl={player.avatarUrl}
        countryCode={player.countryCode}
      />
      <div className="info-block">
        <div className="info-block-inner">

          <CustomOverlayTrigger overlay={realnamePopover}>
            <div className="real-name">{player.realname}</div>
          </CustomOverlayTrigger>


          <span id="friend-glyph" className="glyphicon glyphicon-user" />{player.friendCount}
          <img src={steamLogo} className="img-rounded steam-logo" alt="Avatar" />{`${player.timecreated}y`}


        </div>
      </div>

    </div>
  );
}

PlayerInfo.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerInfo;
