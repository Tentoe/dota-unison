import { BigInteger } from 'jsbn';

import { updateSummaries } from './';

const { remote } = window.require('electron');

const fs = remote.require('fs-extra');


export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';

const serverLogFile = '/home/kkurz/.steam/steam/steamapps/common/dota 2 beta/game/dota/server_log.txt';
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

export const readServerLog = (line = 0) => (dispatch) => {
  fs.readFile(serverLogFile)
    .then(splitLines)
    .then(filterLoopback)
    .then(array => array[(array.length - 1) - line])
    .then(extractGameData)
    .then(players => dispatch(updatePlayers(players)));
};
