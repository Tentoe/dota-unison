import React from 'react';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/PlayerCard';
import Loading from './Loading';

import { getHeroList, listenForNewGame } from '../api/playerCardAPI';

class TeamGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.newGame = this.newGame.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
  }

  componentDidMount() {
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

  //  getHeroList().then(console.log);
    listenForNewGame().then(this.updatePlayers);
  }
  newGame(players) {
    this.setState(() => ({ players }));
  }
  updatePlayers(players) {
    console.log(players);
    this.setState(() => ({
      players,
    }));
  }
  render() {
    const players = this.state.players;


    if (players) {
      const radiantPlayers = players.slice(0, 5);
      const direPlayers = players.slice(5, 10);
      return (
        <div className="container-fluid">

          <div className="row" >
            <div className="col-md-2">Team Stats</div>
            {radiantPlayers.map(p => (<PlayerCard player={p} />))}
          </div>
          <div className="row" >
            <div className="col-md-2">{'stuff'}</div>
            {direPlayers.map(p => (<PlayerCard player={p} />))}
          </div>

        </div>
      );
    }

    return <Loading />;
  }
}

export default TeamGrid;
