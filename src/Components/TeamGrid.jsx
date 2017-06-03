import React from 'react';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/PlayerCard';

function TeamGrid() {
  const player = {
    name: 'Tentoe',
    mmr: 3000,
    playtime: 2345,
    countryCode: 'DE',
    avatarUrl: 'http://cdn.edgecast.steamstatic.com/steamcommunity/public/images/avatars/9a/9a5690fadc8218014d0710c6ad4a9656b7a43683_full.jpg',
    realname: 'this is my',
    timecreated: 12.3,
    friendCount: 13,
  };
  const players = [player, player, player, player, player];
  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-md-2">Team Stats</div>
        {players.map(p => (<PlayerCard player={p} />))}
      </div>
      <div className="row" >
        <div className="col-md-2">Team Stats2</div>
        {players.map(p => (<PlayerCard player={p} />))}
      </div>
    </div>
  );
}

export default TeamGrid;
