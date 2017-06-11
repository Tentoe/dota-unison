import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';

import './PlayerInfo.css';

import Avatar from './Avatar';
import InfoBlock from './InfoBlock';

function PlayerInfo(props) {
  return (
    <div className="player-info flex-item player-info-rounded border-item">
      <Avatar
        name={props.name}
        avatarUrl={props.avatarUrl}
        countryCode={props.countryCode}
      />
      <InfoBlock
        timecreated={props.timecreated}
        friendCount={props.friendCount}
      />

    </div>
  );
}
PlayerInfo.defaultProps = {
  countryCode: 'unknown',
};
PlayerInfo.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  countryCode: PropTypes.string,
  timecreated: PropTypes.number.isRequired,
  friendCount: PropTypes.number.isRequired,
};

export default PlayerInfo;
