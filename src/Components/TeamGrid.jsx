import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './TeamGrid.css';

import PlayerCard from './PlayerCard/';


import { readServerLog } from '../actions/readServerLog';


class TeamGrid extends React.Component {


  componentDidMount() {
  // TODO  getHeroList().then(console.log);
    this.props.dispatch(readServerLog(0));
  }

  render() {
    const slotIDs = (new Array(10)).fill(0).map((val, index) => index);
    const radiantPlayers = slotIDs.slice(0, 5);
    const direPlayers = slotIDs.slice(5, 10);
    return (
      <div className="container-fluid">

        <div className="row" >
          <div className="col-md-2">Team Stats</div>
          {radiantPlayers.map(id => (<PlayerCard key={id} id={id} />))}
        </div>
        <div className="row" >
          <div className="col-md-2">{'stuff'}</div>
          {direPlayers.map(id => (<PlayerCard key={id} id={id} />))}
        </div>
      </div>
    );
  }


}
TeamGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TeamGrid);
