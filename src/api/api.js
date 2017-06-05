import { watch, readServerLog } from './fsAPI';
import getSummaries from './steam/getSummaries';
import { getIdStringAndPlayers } from './steam/steamAPI';
import getVac from './steam/getVac';

function listenForNewGame() {
  return watch().then(getSummaries);

// TODO: use something like readLastGame
}

function readLastGame(line = 0) {
  const serverLogPromise = readServerLog(line).then(getIdStringAndPlayers);
  return {
    summaries: serverLogPromise.then(getSummaries),
    vacBans: serverLogPromise.then(getVac),
  };
}
export { readLastGame, listenForNewGame };
