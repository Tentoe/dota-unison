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
      <div className="inner-player-card">
        <ul>
          <CustomOverlayTrigger overlay={namePopover}>
            <li className="player-name">{player.name}</li>
          </CustomOverlayTrigger>
          <li ><PlayerInfo player={player} /></li>
        </ul>
      </div>
    </div>
  );
}
PlayerCard.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerCard;
