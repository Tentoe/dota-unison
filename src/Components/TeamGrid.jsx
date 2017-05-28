import React from 'react';
import './TeamGrid.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import PlayerCard from './PlayerCard/PlayerCard';

function TeamGrid() {
  const player = {
    name: 'Tentoe',
    mmr: 3000,
    country: 'DE' };
  const players = [player, player, player, player, player];
  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-md-2">Team Stats</div>
        {players.map(p => (<PlayerCard player={p} />))}
      </div>
    </div>
  );
}

export default TeamGrid;
