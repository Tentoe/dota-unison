import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PerformanceBubble from './PerformanceBubble';
import { makePlayedGames, makeOpenDotaPlayer } from '../../selectors';

const makeMapStateToProps = () => {
  const getPlayedGames = makePlayedGames();
  const getOpenDotaPlayer = makeOpenDotaPlayer();

  const mapStateToProps = (state, props) => ({
    playedGames: getPlayedGames(state, props),
    openDotaPLayer: getOpenDotaPlayer(state, props),
  });
  return mapStateToProps;
};

const unknown = '????';

function PerformanceInfo(props) {
  const { playedGames, openDotaPLayer } = props;
  const playedDotaHours = playedGames ?
   (playedGames.games.find(item => item.appid === 570).playtime_forever / 60)
   .toFixed(0).toString() :
    unknown;
  const mmr = openDotaPLayer && openDotaPLayer.solo_competitive_rank ?
  openDotaPLayer.solo_competitive_rank.toString() : unknown;
  const mmrEst = openDotaPLayer && openDotaPLayer.mmr_estimate.estimate ?
  openDotaPLayer.mmr_estimate.estimate.toString() : unknown;
  return (
    <div className="text-center">
      <PerformanceBubble
        topValue={mmr}
        bottomValue={mmrEst}
        topLabel={'MMR'}
        bottomLabel={'MMR est.'}
      />
      <PerformanceBubble
        topValue={playedDotaHours}
        bottomValue={unknown}
        topLabel={'Playtime(h)'}
        bottomLabel={'WinRate'}
      />
    </div>
  );
}
PerformanceInfo.defaultProps = {
  playedGames: null,
  openDotaPLayer: null,
};
PerformanceInfo.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  playedGames: PropTypes.shape({}),
  openDotaPLayer: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(PerformanceInfo);
