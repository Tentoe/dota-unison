import React from 'react';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/PlayerCard';
import Loading from './Loading';

import { readLastGame } from '../api/api';

function mapPlayerChanges(prevStateClone, update, updateString) {
  return update.map((val, index) =>
  Object.assign({}, prevStateClone.players[index], { [updateString]: val }));
}

class TeamGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };

    this.newGame = this.newGame.bind(this);
    this.updateSummaries = this.updateSummaries.bind(this);
    this.updatePlayers = this.updatePlayers.bind(this);
    this.updateVacBans = this.updateVacBans.bind(this);
  }

  componentDidMount() {
  //  getHeroList().then(console.log);
    const promises = readLastGame();
    promises.summaries.then(this.updateSummaries);
    promises.vacBans.then(this.updateVacBans);
  }
  newGame(players) {
    this.setState(() => ({ players }));
  }
  updatePlayers(data, identifier) {
    this.setState(prevState => ({ players:
       mapPlayerChanges(JSON.parse(JSON.stringify(prevState)), data, identifier) }),
        () => console.log(this.state));
  }
  updateSummaries(summaries) {
    this.updatePlayers(summaries, 'summary');
  }
  updateVacBans(vacBans) {
    this.updatePlayers(vacBans, 'vac');
  }
  render() {
    const players = this.state.players;


    if (players[0] && players[0].summary) {
      const radiantPlayers = players.slice(0, 5);
      const direPlayers = players.slice(5, 10);
      return (
        <div className="container-fluid">

          <div className="row" >
            <div className="col-md-2">Team Stats</div>
            {radiantPlayers.map(p => (<PlayerCard player={p.summary} />))}
          </div>
          <div className="row" >
            <div className="col-md-2">{'stuff'}</div>
            {direPlayers.map(p => (<PlayerCard player={p.summary} />))}
          </div>

        </div>
      );
    }

    return <Loading />;
  }
}

export default TeamGrid;
