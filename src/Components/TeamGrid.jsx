import React from 'react';
import './TeamGrid.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import PlayerCard from './PlayerCard/PlayerCard';

function TeamGrid() {
  const player = {
    name: 'Tentoe',
    mmr: 3000,
    countryCode: 'DE',
    avatarUrl: 'http://cdn.edgecast.steamstatic.com/steamcommunity/public/images/avatars/9a/9a5690fadc8218014d0710c6ad4a9656b7a43683_full.jpg' };
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
