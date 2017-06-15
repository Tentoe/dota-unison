import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover } from 'react-bootstrap';

import './PlayerCard.css';

import PlayerInfo from './PlayerInfo';
import CustomOverlayTrigger from './CustomOverlayTrigger';
import PerformanceInfo from './PerformanceInfo';
import MostPlayedTable from './MostPlayedTable';
import BehavioralInfo from './BehavioralInfo';
import Comment from './Comment';
import Loading from '../Loading';
import { makeSummary } from '../../selectors';

const makeMapStateToProps = () => {
  const getSummary = makeSummary();
  const mapStateToProps = (state, props) => ({
    summary: getSummary(state, props),
  });
  return mapStateToProps;
};

function PlayerCard(props) {
  const { summary } = props;
  if (summary) {
    const namePopover = (
      <Popover id="playernamePopover" title="Player's Name">
        <div className="text-center"><strong>{summary.personaname}</strong></div>
        <div className="text-center">{summary.realname}</div>
      </Popover>
  );
    return (
      <div className="col-lg-2 player-card-outer">
        <div className="player-card-inner border-item">
          <div>
            <CustomOverlayTrigger overlay={namePopover} >
              <div className="player-card-name header-size flex-item overflow-item">
                {summary.personaname}
              </div>
            </CustomOverlayTrigger>
            <PlayerInfo
              id={props.id}
              avatarUrl={summary.avatarfull}
              countryCode={summary.loccountrycode}
            />
            <PerformanceInfo id={props.id} />
            <MostPlayedTable id={props.id} />
            <BehavioralInfo />
            <Comment id={props.id} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-md-2 player-card-outer">
      <div className="player-card-inner border-item">
        <Loading />
      </div>
    </div>);
}
PlayerCard.defaultProps = {
  summary: null,
};
PlayerCard.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  summary: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(PlayerCard);
