import React from 'react';
// import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import './MostPlayedTable.css';

function MostPlayedTable() { // style={{ marginBottom: '0px' }}
  return (
    <div className="most-played-table-container border-item">

      <Table className="most-played-table" condensed>

        <tbody>
          <tr>
            <td>Ancient Apparition</td>
            <td>12</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Legion Commander</td>
            <td>3</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>Templar Assassin</td>
            <td>132</td>
            <td>50%</td>
          </tr>
        </tbody>
      </Table>
    </div>

  );
}

MostPlayedTable.propTypes = {
};

export default MostPlayedTable;
