import { BigInteger } from 'jsbn';

const { remote } = window.require('electron');
const { Gaze } = remote.require('gaze');


const fs = remote.require('fs-extra');
// FIXME: dynamic location


const serverLogFile = '/home/kkurz/.steam/steam/steamapps/common/dota 2 beta/game/dota/server_log.txt';
const loopback = /.*loopback.*/;
let gaze = null;

function split(data) {
  return data.toString().split(/\r?\n|\r/);
}

// FIXME: not the right behavior yet
function findLine(lines, i = 0) {
  const lineNr = i + 1;// last line is empty
  if (lines.length - 1 - lineNr < 0) throw new Error('No valid line found in serverlog');
  const line = lines[lines.length - 1 - lineNr];
  if (line.match(loopback)) return findLine(lines, lineNr + 1);
  return line;
}

function extractSteamID(string) {
  return string.match(/\d+/g)[2];
}

function convertToSteamID64(val) {
  return new BigInteger('76561197960265728').add(new BigInteger(val.toString()));
}

function calculateIDs(idString) {
  return {
    steamID3: +idString,
    steamID64: convertToSteamID64(+idString),
  };
}

function extractGameData(line) {
  const lobbyString = line.match(/\(Lobby.*?\)/)[0];
  const partyString = line.match(/\(Party.*?\)/)[0];

  const steamID = /\d:\[U:1:\d+\]/g;

  return {
    players: lobbyString.match(steamID).map(extractSteamID).map(calculateIDs),
    party: partyString.match(steamID).map(extractSteamID).map(calculateIDs),
  };
}


function watch() {
  if (gaze) { gaze.close(); }

  return new Promise((resolve, reject) => {
    gaze = new Gaze(serverLogFile);
    gaze.on('changed', (path) => {
      fs.readFile(path)
      .then(split).then(findLine).then(extractGameData)
      .then(resolve)
      .catch(reject);
    });
  });
}


function unwatch() {
  if (gaze) { gaze.close(); }
  gaze = null;
}

function filterLoopback(array) {
  return array.filter(item => !(/.*loopback.*/.test(item)));
}

function readServerLog(line = 0) {
  return fs.readFile(serverLogFile)
  .then(split).then(filterLoopback)
  .then(array => findLine(array, line))
  .then(extractGameData);
}


export { watch, unwatch, readServerLog };
