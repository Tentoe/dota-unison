import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';

import './PlayerInfo.css';

import Avatar from './Avatar';
import InfoBlock from './InfoBlock';

function PlayerInfo(props) {
  const player = props.player;


  return (
    <div className="player-info rounded border-item">
      <Avatar
        name={player.name}
        avatarUrl={player.avatarUrl}
        countryCode={player.countryCode}
      />
      <InfoBlock
        realname={player.realname}
        timecreated={player.timecreated}
        friendCount={player.friendCount}
      />
    </div>
  );
}

PlayerInfo.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerInfo;
