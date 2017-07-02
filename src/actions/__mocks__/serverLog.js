import { updateSummaries } from '../';

export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';


const mockPlayers = [{ steamID3: '187147501', steamID64: '76561198147413229', inMyParty: false },
{ steamID3: '38772058', steamID64: '76561197999037786', inMyParty: false },
{ steamID3: '2263887', steamID64: '76561197962529615', inMyParty: false },
{ steamID3: '173097632', steamID64: '76561198133363360', inMyParty: false },
{ steamID3: '178951334', steamID64: '76561198139217062', inMyParty: false },
{ steamID3: '3471254', steamID64: '76561197963736982', inMyParty: true },
{ steamID3: '53356811', steamID64: '76561198013622539', inMyParty: false },
{ steamID3: '89622883', steamID64: '76561198049888611', inMyParty: false },
{ steamID3: '37043711', steamID64: '76561197997309439', inMyParty: false },
{ steamID3: '160912742', steamID64: '76561198121178470', inMyParty: false }];

function joinID64(acc, player, i) {
  const separator = i === 0 ? '' : ','; // no separator on first value
  return `${acc}${separator}${player.steamID64.toString()}`;
}

function getIdString(players) {
  return players.reduce(joinID64, '');
}
const updatePlayers = players => (dispatch) => {
  dispatch({
    type: UPDATE_PLAYERS,
    payload: players,
  });
  dispatch(updateSummaries(getIdString(players)));
};

export const readServerLog = () => (dispatch) => {
  Promise.resolve(dispatch(updatePlayers(mockPlayers)));
};
