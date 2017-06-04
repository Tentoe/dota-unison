import React from 'react';

import PerformanceBubble from './PerformanceBubble';

function PerformanceInfo() {
  return (
    <div className="text-center">
      <PerformanceBubble
        topValue={`${2222}`}
        bottomValue={`${3333}`}
        topLabel={'MMR'}
        bottomLabel={'Playtime'}
      />
      <PerformanceBubble
        topValue={`${2222}`}
        bottomValue={`${3333}`}
        topLabel={'MMR'}
        bottomLabel={'Playtime'}
      />
    </div>
  );
}


export default PerformanceInfo;
