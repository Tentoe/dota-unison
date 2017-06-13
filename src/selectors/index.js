import { createSelector } from 'reselect';

const getPlayerID = (state, props) =>
 (state.players[props.id] ?
   state.players[props.id].steamID64 :
   '');// TODO is ? rally necessary?


const getFromID64 = (playerID, stateProperty) =>
  stateProperty.find(item => item.steamID64 === playerID);


export const makeSummary = () => createSelector(
  [getPlayerID, state => state.summaries],
  (playerID, summaries) => summaries.find(item => item.steamid === playerID));

export const makeVAC = () => createSelector(
  [getPlayerID, state => state.vac],
  (playerID, vac) => vac.find(item => item.SteamId === playerID));

export const makeFriendList = () => createSelector(
  [getPlayerID, state => state.friendLists],
  getFromID64);

export const makePlayedGames = () => createSelector(
  [getPlayerID, state => state.playedGames],
  getFromID64);

export const makeOpenDotaPlayer = () => createSelector(
  [getPlayerID, state => state.openDotaPlayers],
  getFromID64);

export const makeOpenDotaCounts = () => createSelector(
  [getPlayerID, state => state.openDotaCounts],
  getFromID64);

export const makeOpenDotaHeroes = () => createSelector(
  [getPlayerID, state => state.openDotaHeroes],
  getFromID64);
