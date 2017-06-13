import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import './MostPlayedTable.css';
import { makeOpenDotaHeroes } from '../../selectors';


const makeMapStateToProps = () => {
  const getOpenDotaHeroes = makeOpenDotaHeroes();

  const mapStateToProps = (state, props) => ({
    openDotaHeroes: getOpenDotaHeroes(state, props),
  });
  return mapStateToProps;
};

function MostPlayedTable(props) { // style={{ marginBottom: '0px' }}
  const { openDotaHeroes } = props;
  if (openDotaHeroes && openDotaHeroes['0'].games) {
    const heroArray = [
      openDotaHeroes['0'],
      openDotaHeroes['1'],
      openDotaHeroes['2'],
    ];
    return (
      <div className="most-played-table-container border-item">

        <Table className="most-played-table" condensed>

          <tbody>
            {heroArray.map(item => (
              <tr key={item.hero_id}>
                <td>{item.hero_id}</td>
                <td>{item.games}</td>
                <td>{((item.win / item.games) * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    );
  }
  return (
    <div className="most-played-table-container border-item">
      <Table className="most-played-table" condensed >
        <tbody>
          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}
MostPlayedTable.defaultProps = {
  openDotaHeroes: null,
};
MostPlayedTable.propTypes = {
  openDotaHeroes: PropTypes.shape({}),
};

export default connect(makeMapStateToProps)(MostPlayedTable);
