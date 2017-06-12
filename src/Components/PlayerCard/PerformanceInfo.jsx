import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PerformanceBubble from './PerformanceBubble';
import { makePlayedGames } from '../../selectors';

const makeMapStateToProps = () => {
  const getPlayedGames = makePlayedGames();

  const mapStateToProps = (state, props) => ({
    playedGames: getPlayedGames(state, props),
  });
  return mapStateToProps;
};

const unknown = '???';

function PerformanceInfo(props) {
  const { playedGames } = props;
  const playedDotaHours = playedGames ?
   (playedGames.games.find(item => item.appid === 570).playtime_forever / 60)
   .toFixed(0).toString() :
    unknown;
  return (
    <div className="text-center">
      <PerformanceBubble
        topValue={unknown}
        bottomValue={unknown}
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
};
PerformanceInfo.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  playedGames: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(PerformanceInfo);
