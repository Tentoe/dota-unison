import { BigInteger } from 'jsbn';
import _ from 'lodash';

import { updateComments } from './comments';
import {
    fetchOpenDotaPlayer,
    fetchOpenDotaCounts,
    fetchOpenDotaHeroes,
  } from './openDotaAPI';
import {
    fetchSummaries,
    fetchVAC,
    fetchFriendlist,
    fetchPlayedGames,
  } from './steamAPI';
import { getComment } from '../db';

const { remote } = window.require('electron');

const fs = remote.require('fs-extra');


export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';

const serverLogFile = './test/server_log.test.txt';
// '/home/kkurz/.steam/steam/steamapps/common/dota 2 beta/game/dota/server_log.txt';
// FIXME: dynamic location

function splitLines(data) {
  return data.toString().split(/\r?\n|\r/);
}

function filterLoopback(array) { // TODO filter all non valid lines
  return array.filter(item => item && !(/.*loopback.*/.test(item)));
}

function extractSteamID(string) {
  return string.match(/\d+/g)[2];
}

function convertToSteamID64(val) {
  return new BigInteger('76561197960265728').add(new BigInteger(val.toString()));
}

function getPlayer(idString, partyArray) {
  return {
    steamID3: idString,
    steamID64: convertToSteamID64(+idString).toString(),
    inMyParty: partyArray.includes(idString),
  };
}

function extractGameData(line) {
  const lobbyString = line.match(/\(Lobby.*?\)/)[0];
  const partyString = line.match(/\(Party.*?\)/)[0];

  const steamID = /\d:\[U:1:\d+\]/g;

  const partyArray = partyString.match(steamID).map(extractSteamID);

  return lobbyString.match(steamID).map(extractSteamID)
  .map(item => getPlayer(item, partyArray));
}

function getIdString(players) {
  return _.join(players.reduce((acc, player) => _.concat(acc, player.steamID64.toString()), []), ',');
}

const fetchFriendLists = players => (dispatch) => {
  players.forEach(p => dispatch(fetchFriendlist(p)));
  // TODO dont fetch from private profiles
};
const fetchPlayedGamesPrivate = players => (dispatch) => {
  players.forEach(p => dispatch(fetchPlayedGames(p)));
  // TODO dont fetch from private profiles
};
const fetchOpenDotaPlayers = players => (dispatch) => {
  players.forEach(p => dispatch(fetchOpenDotaPlayer(p)));
  // TODO when to fetch?
};
const fetchOpenDotaCountsPrivate = players => (dispatch) => {
  players.forEach(p => dispatch(fetchOpenDotaCounts(p)));
  // TODO when to fetch?
};
const fetchOpenDotaHeroesPrivate = players => (dispatch) => {
  players.forEach(p => dispatch(fetchOpenDotaHeroes(p)));
  // TODO when to fetch?
};

const updatePlayers = players => ({
  type: UPDATE_PLAYERS,
  payload: players,
});


const loadComments = players => (dispatch) => {
  players.forEach(player => getComment(player.steamID64)
    .then(comment => dispatch(updateComments({ [player.steamID64]: comment }))));
};


const startPlayerUpdate = players => (dispatch) => {
  // FIXME force order with promise and make sure hero ids exist
  dispatch(updatePlayers(players));

  dispatch(loadComments(players));

  const idString = getIdString(players);
  dispatch(fetchSummaries(idString));
  dispatch(fetchVAC(idString));
  dispatch(fetchFriendLists(players));
  dispatch(fetchPlayedGamesPrivate(players));
  dispatch(fetchOpenDotaPlayers(players));
  dispatch(fetchOpenDotaCountsPrivate(players));
  dispatch(fetchOpenDotaHeroesPrivate(players));
};

export const readServerLog = (line = 0) => (dispatch) => {
  fs.readFile(serverLogFile)
    .then(splitLines)
    .then(filterLoopback)
    .then(array => array[(array.length - 1) - line])
    .then(extractGameData)
    .then(players => dispatch(startPlayerUpdate(players)));
};
