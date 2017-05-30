import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './PlayerCard.css';

import PlayerInfo from './PlayerInfo';
import CustomOverlayTrigger from './CustomOverlayTrigger';

function PlayerCard(props) {
  const player = props.player;
  const namePopover = (
    <Popover title="Player Name" >
      <strong>{player.name} Playername and something like links to dotabuff and opendota</strong>
    </Popover>
      );
  return (
    <div className="col-md-2 outer-player-card">
      <div className="inner-player-card border-item">
        <div>
          <CustomOverlayTrigger overlay={namePopover}>
            <div className="player-name flex-item overflow-item">{player.name}</div>
          </CustomOverlayTrigger>
          <div className="flex-item"><PlayerInfo player={player} /></div>
        </div>
      </div>
    </div>
  );
}
PlayerCard.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerCard;
