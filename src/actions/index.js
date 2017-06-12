import key from '../keys';


export const FETCH_VAC = 'FETCH_VAC';
export const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
export const FETCH_FRIEDNLIST = 'FETCH_FRIEDNLIST';

export const SUCCESS_SUFIX = '_SUCCESS';

export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';


export const fetchSummaries = idString => ({
  type: FETCH_SUMMARIES,
  payload: {
    client: 'steam',
    request: {
      url: `/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${idString}`,
    },
  },
}
);

export const fetchVAC = idString => ({
  type: FETCH_VAC,
  payload: {
    client: 'steam',
    request: {
      url: `/ISteamUser/GetPlayerBans/v0001/?key=${key}&steamids=${idString}`,
    },
  },
  test: 'test',
}
);


export const fetchFriendlist = player => ({
  type: FETCH_FRIEDNLIST,
  payload: {
    client: 'steam',
    request: {
      url: `/ISteamUser/GetFriendList/v0001/?key=${key}&steamid=${player.steamID64}`,
    },
  },
  player,
}
);

// function getHeroList() {
//   const encodedURI = window.encodeURI(`https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${key}&language=english`);
//   return axios.get(encodedURI).then(response => response.data.result.heroes);
// }
