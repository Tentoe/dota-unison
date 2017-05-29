import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import PlayerInfo from './PlayerInfo';

function PlayerCard(props) {
  const player = props.player;
  return (
    <div className="col-md-2 outer-player-card">
      <div className="inner-player-card">
        <ul>
          <li className="player-name">{player.name}</li>
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
