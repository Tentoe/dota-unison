import { key } from './steamAPI';

const { remote } = window.require('electron');
const axios = remote.require('axios');

function transformReturnPlayers(after, before) {
  const sortArray = before.map(itemBefore =>
    after.indexOf(
      after.find(itemAfter => itemAfter.SteamId === itemBefore.steamID64.toString()),
  ));

// FIXME: error handling

  return sortArray.map(index => after[index]);
}


function getVac(idAndPlayers) {
  const { players, idString } = idAndPlayers;
  const encodedURI = `https://api.steampowered.com/ISteamUser/GetPlayerBans/v0001/?key=${key}&steamids=${idString}`;
  return axios.get(encodedURI)
  .then(response => transformReturnPlayers(response.data.players, players));
}


export default getVac;
