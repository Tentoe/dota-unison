import React from 'react';
import PropTypes from 'prop-types';

import InfoBubble from './InfoBubble';

function PerformanceInfo(props) {
  const player = props.player;


  return (
    <div className="rounded border-item" >
      <InfoBubble
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
