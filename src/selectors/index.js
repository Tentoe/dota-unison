import { createSelector } from 'reselect';

const getPlayerID = (state, props) =>
 (state.players[props.id] ?
   state.players[props.id].steamID64 :
   '');// TODO is ? rally necessary?

const getSummaries = state => state.summaries;
const getVAC = state => state.vac;
const getFriendLists = state => state.friendLists;
const getPlayedGames = state => state.playedGames;
const getOpenDotaPlayers = state => state.openDotaPlayers;


export const makeSummary = () => createSelector(
  [getPlayerID, getSummaries],
  (playerID, summaries) => summaries.find(item => item.steamid === playerID));

export const makeVAC = () => createSelector(
  [getPlayerID, getVAC],
  (playerID, vac) => vac.find(item => item.SteamId === playerID));

export const makeFriendList = () => createSelector(
  [getPlayerID, getFriendLists],
  (playerID, friendLists) => friendLists.find(item => item.steamID64 === playerID));

export const makePlayedGames = () => createSelector(
  [getPlayerID, getPlayedGames],
  (playerID, playedGames) => playedGames.find(item => item.steamID64 === playerID));

export const makeOpenDotaPlayer = () => createSelector(
  [getPlayerID, getOpenDotaPlayers],
  (playerID, openDotaPlayer) => openDotaPlayer.find(item => item.steamID64 === playerID));
