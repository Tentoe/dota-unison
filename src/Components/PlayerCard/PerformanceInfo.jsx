import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover } from 'react-bootstrap';

import PerformanceBubble from './PerformanceBubble';
import { makePlayedGames, makeOpenDotaPlayer, makeOpenDotaCounts } from '../../selectors';
import CustomOverlayTrigger from './CustomOverlayTrigger';

const makeMapStateToProps = () => {
  const getPlayedGames = makePlayedGames();
  const getOpenDotaPlayer = makeOpenDotaPlayer();
  const getOpenDotaCounts = makeOpenDotaCounts();

  const mapStateToProps = (state, props) => ({
    playedGames: getPlayedGames(state, props),
    openDotaPlayer: getOpenDotaPlayer(state, props),
    openDotaCounts: getOpenDotaCounts(state, props),
  });
  return mapStateToProps;
};

const unknown = '???';
// TODO include winrate
function PerformanceInfo(props) {
  const { playedGames, openDotaPlayer, openDotaCounts } = props;
  const playedDotaHours = playedGames ?
   (playedGames.games.find(item => item.appid === 570).playtime_forever / 60)
   .toFixed(0).toString() :
    unknown;
  const mmr = openDotaPlayer && openDotaPlayer.solo_competitive_rank ?
  openDotaPlayer.solo_competitive_rank.toString() : unknown;
  const mmrEst = openDotaPlayer && openDotaPlayer.mmr_estimate.estimate ?
  openDotaPlayer.mmr_estimate.estimate.toString() : unknown;
  const stdDev = openDotaPlayer && openDotaPlayer.mmr_estimate.stdDev &&
    openDotaPlayer.mmr_estimate.stdDev.toFixed(0);
  const n = openDotaPlayer && openDotaPlayer.mmr_estimate.n;
  const winRate = openDotaCounts && openDotaCounts.winLose ?
     ((openDotaCounts.winLose.win / openDotaCounts.winLose.games) * 100).toFixed(0)
     : unknown;
  const mmrPopover = ( // TODO: make conditional
    <Popover id="mmrPopoverId" title="Player's MMR">
      <div><strong>{mmr} MMR</strong> (taken from OpenDota)</div>
      <div ><strong>{mmrEst}{ stdDev ? `(±${stdDev})` : null } estimated MMR</strong> in the last {n} Games.</div>
    </Popover>
  );
  const winratePopover = ( // TODO: put something usefull here
    <Popover id="winratePopoverId" title="Player's winrate">
    something usefull
  </Popover>
  );


  return (
    <div className="text-center">
      <CustomOverlayTrigger overlay={mmrPopover} >
        <span>
          <PerformanceBubble
            topValue={mmr}
            bottomValue={mmrEst}
            topLabel={'MMR'}
            bottomLabel={'MMR est.'}
          />
        </span>
      </CustomOverlayTrigger>
      <CustomOverlayTrigger overlay={winratePopover} >
        <span>
          <PerformanceBubble
            topValue={playedDotaHours}
            bottomValue={`${winRate}%`}
            topLabel={'Playtime(h)'}
            bottomLabel={'WinRate'}
          />
        </span>
      </CustomOverlayTrigger>
    </div>
  );
}
PerformanceInfo.defaultProps = {
  playedGames: null,
  openDotaPlayer: null,
  openDotaCounts: null,
};
PerformanceInfo.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  playedGames: PropTypes.shape({}),
  openDotaPlayer: PropTypes.shape({}),
  openDotaCounts: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(PerformanceInfo);
