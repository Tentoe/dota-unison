import React from 'react';
import PropTypes from 'prop-types';
import 'flag-icon-css/css/flag-icon.css';
import './PlayerCard.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';


function getFlagClass(cc) {
  return `flag-icon flag-icon-${cc.toLowerCase()}`;
}

function PlayerCard(props) {
  const player = props.player;
  return (
    <div className="col-md-2 outer-player-card">
      <div className="inner-player-card">
        <ul>
          <li className="player-name">{player.name}</li>
          <li><span className={getFlagClass(player.country)} /></li>
        </ul>
      </div>
    </div>
  );
}
PlayerCard.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerCard;
