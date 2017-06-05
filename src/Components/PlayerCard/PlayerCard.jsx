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
    <Popover title="Player's Name">
      <div className="text-center"><strong>{player.personaname}</strong></div>
      <div className="text-center">{player.realname}</div>
    </Popover>
  );
  return (
    <div className="col-md-2 player-card-outer">
      <div className="player-card-inner border-item">
        <div>
          <CustomOverlayTrigger overlay={namePopover} >
            <div className="player-card-name header-size flex-item overflow-item">
              {player.personaname}
            </div>
          </CustomOverlayTrigger>
          <PlayerInfo
            name={player.personaname}
            realname={player.realname}
            avatarUrl={player.avatarfull}
            countryCode={player.loccountrycode}
            timecreated={player.timecreated}
            friendCount={12}
          />
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
