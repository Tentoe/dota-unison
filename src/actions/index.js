import key from '../keys';


export const FETCH_VAC = 'FETCH_VAC';
export const FETCH_HEROES = 'FETCH_HEROES';
export const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
export const FETCH_FRIEDNLIST = 'FETCH_FRIEDNLIST';
export const FETCH_PLAYEDGAMES = 'FETCH_PLAYEDGAMES';
export const FETCH_OPENDOTAPLAYER = 'FETCH_OPENDOTAPLAYER';
export const FETCH_OPENDOTACOUNTS = 'FETCH_OPENDOTACOUNTS';
export const FETCH_OPENDOTAHEROES = 'FETCH_OPENDOTAHEROES';

export const SUCCESS_SUFIX = '_SUCCESS';

export const UPCLICK_COMMENT = 'UPCLICK_COMMENT';
export const DOWNCLICK_COMMENT = 'DOWNCLICK_COMMENT';


export const upClickComment = id => (dispatch, getState) => {
  dispatch({
    type: UPCLICK_COMMENT,
    payload: getState().players[id].steamID64,
  });
};

export const downClickComment = id => (dispatch, getState) => {
  dispatch({
    type: DOWNCLICK_COMMENT,
    payload: getState().players[id].steamID64,
  });
};


export const fetchHeroes = () => ({
  type: FETCH_HEROES,
  payload: {
    client: 'steam',
    request: {
      url: `/IEconDOTA2_570/GetHeroes/v0001/?key=${key}&language=english`,
    },
  },
}
);

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

export const fetchPlayedGames = player => ({
  type: FETCH_PLAYEDGAMES,
  payload: {
    client: 'steam',
    request: {
      url: `/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${key}&steamid=${player.steamID64}`,
    },
  },
  player,
}
);


export const fetchOpenDotaPlayer = player => ({
  type: FETCH_OPENDOTAPLAYER,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}`,
    },
  },
  player,
}
);


export const fetchOpenDotaCounts = player => ({
  type: FETCH_OPENDOTACOUNTS,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}/counts?date=91`, //TODO dynamic date
    },
  },
  player,
}
);


export const fetchOpenDotaHeroes = player => ({
  type: FETCH_OPENDOTAHEROES,
  payload: {
    client: 'openDota',
    request: {
      url: `/api/players/${player.steamID3}/heroes?date=91`, //TODO dynamic date
    },
  },
  player,
}
);

// function getHeroList() {
//   const encodedURI = window.encodeURI(`https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${key}&language=english`);
//   return axios.get(encodedURI).then(response => response.data.result.heroes);
// }
