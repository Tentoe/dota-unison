import { key } from './steamAPI';

const { remote } = window.require('electron');
const axios = remote.require('axios');

function transformReturnPlayers(after, before) {
  const sortArray = before.map(itemBefore =>
    after.indexOf(
      after.find(itemAfter => itemAfter.steamid === itemBefore.steamID64.toString()),
  ));

// FIXME: error handling

  return sortArray.map((itemIndex, index) =>
  Object.assign(after[itemIndex],
    { steamID3: before[index].steamID3.toString() }));
}


function getSummaries(idAndPlayers) { // steamID3
  const { players, idString } = idAndPlayers;

  const encodedURI = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${idString}`;
  return axios.get(encodedURI)
  .then(response => transformReturnPlayers(response.data.response.players, players));
}

export default getSummaries;
