import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popover } from 'react-bootstrap';
import { connect } from 'react-redux';

import './MostPlayedTable.css';
import { getHeroes, makeOpenDotaHeroes } from '../../selectors';
import CustomOverlayTrigger from './CustomOverlayTrigger';


const makeMapStateToProps = () => {
  const getOpenDotaHeroes = makeOpenDotaHeroes();

  const mapStateToProps = (state, props) => ({
    openDotaHeroes: getOpenDotaHeroes(state, props),
    heroes: getHeroes(state),
  });
  return mapStateToProps;
};

function MostPlayedTable(props) { // TODO style={{ marginBottom: '0px' }}
  const { openDotaHeroes, heroes } = props;
  if (openDotaHeroes && openDotaHeroes.heroes && openDotaHeroes.heroes[0].games) {
    const center = { 'text-align': 'center' };
    const heroesPopover = (
      <Popover id="heroesPopoverID" >
        <div className="most-played-popover">
          <Table striped bordered condensed hover >
            <thead>
              <td style={center}>Hero</td>
              <td>Games</td>
              <td style={center}>Win</td>
            </thead>
            <tbody>
              {openDotaHeroes.heroes.map(item => (item.games ?
                <tr key={item.hero_id}>
                  <td>{heroes[item.hero_id]}</td>
                  <td>{item.games}</td>
                  <td>{((item.win / item.games) * 100).toFixed(0)}%</td>
                </tr>
                  : null))}
            </tbody>
          </Table>
        </div>
      </Popover>);
    const heroArray = [
      openDotaHeroes.heroes[0],
      openDotaHeroes.heroes[1],
      openDotaHeroes.heroes[2],
    ];
    return (
      <CustomOverlayTrigger overlay={heroesPopover}>
        <div className="most-played-table-container border-item">

          <Table className="most-played-table" condensed>

            <tbody>
              {heroArray.map(item => (
                <tr key={item.hero_id}>
                  <td>{heroes[item.hero_id]}</td>
                  <td>{item.games}</td>
                  <td>{((item.win / item.games) * 100).toFixed(0)}%</td>
                </tr>
            ))}
            </tbody>
          </Table>
        </div>
      </CustomOverlayTrigger>
    );
  }
  return (
    <div className="most-played-table-container border-item">
      <Table className="most-played-table" condensed >
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}
MostPlayedTable.defaultProps = {
  openDotaHeroes: null,
  heroes: null,
};
MostPlayedTable.propTypes = {
  openDotaHeroes: PropTypes.shape({}),
  heroes: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(MostPlayedTable);
