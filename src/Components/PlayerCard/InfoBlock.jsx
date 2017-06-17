import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover, Table } from 'react-bootstrap';
import PrivateIcon from 'react-icons/lib/io/eye-disabled';
import LeaveIcon from 'react-icons/lib/io/android-exit';

import './InfoBlock.css';
import { makeVAC, makeSummary, makeFriendList, makeOpenDotaCounts } from '../../selectors';
import CustomOverlayTrigger from './CustomOverlayTrigger';
import steamLogo from './Steam_icon_logo.svg';
import { leaverStatusToNumber } from '../../data';

const makeMapStateToProps = () => {
  const getVAC = makeVAC();
  const getSummary = makeSummary();
  const getFriendList = makeFriendList();
  const getOpenDotaCounts = makeOpenDotaCounts();

  const mapStateToProps = (state, props) => ({
    vac: getVAC(state, props),
    summary: getSummary(state, props),
    friendList: getFriendList(state, props),
    counts: getOpenDotaCounts(state, props),
  });
  return mapStateToProps;
};

const TopLine = (props) => {
  const { friends, timecreated } = props;

  return (
    <div>
      {friends ?
        <span className="info-block-item">
          <span className="glyphicon glyphicon-user" />{friends.length}
        </span> :
      null}
      <span><img src={steamLogo} className="img-rounded info-block-steam-logo" alt="Avatar" />
        {`${(((Date.now() / 1000) - timecreated) / 60 / 60 / 24 / 365).toFixed(1)}y`}
      </span>
    </div>);
};
TopLine.defaultProps = {
  friends: [],
};
TopLine.propTypes = {
  timecreated: PropTypes.number.isRequired,
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};

const Private = () => {
  const popover = (
    <Popover id="privatePopoverID" title="private">
      This players profile is private and no info can be gathered from it.
    </Popover>
  );
  return (
    <div>
      <CustomOverlayTrigger overlay={popover}>
        <span className="info-block-item info-block-warning">
          <PrivateIcon size={20} />
        </span>
      </CustomOverlayTrigger>
    </div>
  );
};


const getVACPopover = (vac) => {
  const keys = Object.keys(vac).slice(1);
  return (
    <Popover id="vacPopoverID" title="This player has a VAC ban">
      <Table striped bordered condensed hover >
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{vac[key].toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Popover>
  );
};


function InfoBlock({ counts, vac, summary, friendList }) {
  return (
    <div className="info-block flex-item">
      <div className="info-block-inner flex-item medium-size-font">
        {summary.communityvisibilitystate === 3 ?
          <TopLine friends={friendList} timecreated={summary.timecreated} /> :
          <Private />}

        <div>
          {vac && vac.NumberOfVACBans ?
            <CustomOverlayTrigger overlay={getVACPopover(vac)}>
              <span className="info-block-item info-block-warning">
                <span className="glyphicon glyphicon-warning-sign" />VAC
              </span>
            </CustomOverlayTrigger>
            : null}
          {counts && counts.leaver_status &&
            !Object.keys(counts.leaver_status)
              .every(val => val == leaverStatusToNumber.NONE) ?// eslint-disable-line eqeqeq
                <span ><LeaveIcon size={20} /><span>1%</span></span>
                : null}
          <span> &#8291;</span>
        </div>
      </div>
    </div>
  );// TODO center items
}
InfoBlock.defaultProps = {
  vac: null,
  summary: null,
  friendList: null,
};
InfoBlock.propTypes = {
  id: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  vac: PropTypes.shape({}),
  summary: PropTypes.shape({}),
  counts: PropTypes.shape({}),
  friendList: PropTypes.arrayOf(PropTypes.shape({})),
};

export default connect(makeMapStateToProps)(InfoBlock);
