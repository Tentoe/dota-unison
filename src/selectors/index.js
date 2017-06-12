import { createSelector } from 'reselect';

const getPlayerID = (state, props) => (state.players[props.id] ? state.players[props.id].steamID64 : '');

const getSummaries = state => state.summaries;

const makeSummary = () => createSelector(
    [getPlayerID, getSummaries],
    (playerID, summaries) =>
    summaries.find(item => item.steamid === playerID),
  );

export default makeSummary;
