import React from 'react';
import PropTypes from 'prop-types';

import './InfoBlock.css';


function InfoBlock(props) {
  const steamLogo = 'https://steamstore-a.akamaihd.net/public/shared/images/responsive/share_steam_logo.png';

  return (
    <div className="info-block flex-item">
      <div className="info-block-inner flex-item medium-size-font">
        <div>
          <span className="info-block-item">
            <span className="glyphicon glyphicon-user" />{props.friendCount}
          </span>
          {props.timecreated ?
            <span><img src={steamLogo} className="img-rounded info-block-steam-logo" alt="Avatar" />
              {`${(((Date.now() / 1000) - props.timecreated) / 60 / 60 / 24 / 365).toFixed(1)}y`}
            </span> : null}
        </div>
        <div><span> &#8291;</span></div>
      </div>
    </div>
  );
}

InfoBlock.propTypes = {
  friendCount: PropTypes.number.isRequired,
  timecreated: PropTypes.number.isRequired,
};

export default InfoBlock;
