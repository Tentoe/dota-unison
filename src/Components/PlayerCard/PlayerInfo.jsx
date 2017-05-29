import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';

import './PlayerInfo.css';


// import { Img } from 'react-bootstrap';


function PlayerInfo(props) {
  const player = props.player;
  return (
    <div className="player-info">

      <div className="media-left avatar-block" >
        <img
          src={player.avatarUrl}
          className="avatar rounded"
          alt={player.name}
          title="Games Played on Server"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="bottom"
          data-content="Some <br> content"
        />
        <span
          className={`flag-icon flag-icon-${player.countryCode.toLowerCase()} flag-item rounded`}
          title="Games Played on Server"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="bottom"
          data-content="Some content"
        />
      </div>
    </div>
  );
}
PlayerInfo.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerInfo;
