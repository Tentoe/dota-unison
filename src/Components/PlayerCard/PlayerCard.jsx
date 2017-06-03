import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-bootstrap';

import './PlayerCard.css';

import PlayerInfo from './PlayerInfo';
import CustomOverlayTrigger from './CustomOverlayTrigger';
import PerformanceInfo from './PerformanceInfo';
import MostPlayedTable from './MostPlayedTable';
import BehavioralInfo from './BehavioralInfo';
import Comment from './Comment';

function PlayerCard(props) {
  const player = props.player;
  const namePopover = (
    <Popover title="Player Name">
      <strong>{player.name}
        Playername and something like links to dotabuff and opendota</strong>
    </Popover>
  );
  return (
    <div className="col-md-2 player-card-outer">
      <div className="player-card-inner border-item">
        <div>
          <CustomOverlayTrigger overlay={namePopover} >
            <div className="player-card-name header-size flex-item overflow-item">
              {player.name}
            </div>
          </CustomOverlayTrigger>
          <PlayerInfo player={player} />
          <PerformanceInfo player={player} />
          <MostPlayedTable />
          <BehavioralInfo />
          <Comment />
        </div>
      </div>
    </div>
  );
}
PlayerCard.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PlayerCard;
