import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import countries from 'i18n-iso-countries';
import flags from '../../flags/';
import './Avatar.css';
import CustomOverlayTrigger from './CustomOverlayTrigger';
import { regions } from '../../data';
import { makeOpenDotaCounts } from '../../selectors';


const makeMapStateToProps = () => {
  const getOpenDotaCounts = makeOpenDotaCounts();
  const mapStateToProps = (state, props) => ({
    openDotaCounts: getOpenDotaCounts(state, props),
  });
  return mapStateToProps;
};

function Avatar(props) {
  const { openDotaCounts, countryCode, avatarUrl } = props;
  const flag = flags[countryCode.toLowerCase()] || flags.unknown;
  const avatarPopover = (
    <Popover id="avatarPopoverID">
      <img src={avatarUrl} alt="full Avatar" />
    </Popover>
  );
  const flagPopover = (
    <Popover id="avatarflagPopoverID" >
      <div>
        <div style={{ display: 'inline-block' }}>
          <div><img src={flag} alt="flag" className="avatar-large-flag" /></div>
          <div className="avatar-country-name">{countries.getName(countryCode, 'en')}</div>
        </div>
        { openDotaCounts && openDotaCounts.region && Object.keys(openDotaCounts.region).length ?
          <Table className="flag-table" striped bordered condensed hover >
            <thead>
              <tr>
                <th>Region</th>
                <th>Games</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(openDotaCounts.region).map(key => (
                <tr key={key}>
                  <td>{regions[key]}</td>
                  <td>{openDotaCounts.region[key].games}</td>
                  <td>{((openDotaCounts.region[key].win / openDotaCounts.region[key].games)
                    * 100).toFixed(0)}%</td>
                </tr>
      ))}
            </tbody>
          </Table>
  : null
}
      </div>
    </Popover>
        );
  return (
    <div className="media-left avatar-block">

      <CustomOverlayTrigger overlay={avatarPopover}>
        <img src={avatarUrl} className="avatar player-info-rounded" alt="avatar" />
      </CustomOverlayTrigger>

      <CustomOverlayTrigger overlay={flagPopover}>
        <img src={flag} className="avatar-flag player-info-rounded" alt="flag" />
      </CustomOverlayTrigger>
    </div>
  );
}
Avatar.defaultProps = {
  openDotaCounts: null,
};
Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  countryCode: PropTypes.string.isRequired,
  openDotaCounts: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(Avatar);
