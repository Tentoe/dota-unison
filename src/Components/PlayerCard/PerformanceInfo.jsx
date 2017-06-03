import React from 'react';
import PropTypes from 'prop-types';

import PerformanceBubble from './PerformanceBubble';

function PerformanceInfo(props) {
  const player = props.player;


  return (
    <div className="text-center">
      <PerformanceBubble
        topValue={`${player.mmr}`}
        bottomValue={`${player.playtime}`}
        topLabel={'MMR'}
        bottomLabel={'Playtime'}
      />
      <PerformanceBubble
        topValue={`${player.mmr}`}
        bottomValue={`${player.playtime}`}
        topLabel={'MMR'}
        bottomLabel={'Playtime'}
      />
    </div>
  );
}

PerformanceInfo.propTypes = {
  player: PropTypes.shape({}).isRequired,
};

export default PerformanceInfo;
