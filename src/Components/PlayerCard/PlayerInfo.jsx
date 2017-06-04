import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';

import './PlayerInfo.css';

import Avatar from './Avatar';
import InfoBlock from './InfoBlock';

function PlayerInfo(props) {
  const player = props.player;


  return (
    <div className="player-info flex-item player-info-rounded border-item">
      <Avatar
        name={player.personaname}
        avatarUrl={player.avatar}
        countryCode={player.loccountrycode}
      />
      <InfoBlock
        realname={player.realname}
        timecreated={player.timecreated}
        friendCount={12}
      />

    </div>
  );
}

PlayerInfo.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerInfo;
