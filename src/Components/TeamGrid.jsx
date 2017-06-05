import React from 'react';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/PlayerCard';
import Loading from './Loading';

import { readLastGame } from '../api/api';

class TeamGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.newGame = this.newGame.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
  }

  componentDidMount() {
  //  getHeroList().then(console.log);
    const promises = readLastGame();
    promises.summaries.then(this.updatePlayers);
    promises.summaries.then(console.log);
    promises.vacBans.then(console.log);
  }
  newGame(players) {
    this.setState(() => ({ players }));
  }
  updatePlayers(players) {
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
