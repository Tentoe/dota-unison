import key from '../keys';


export const FETCH_HEROES = 'FETCH_HEROES';
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

export const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
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

export const FETCH_VAC = 'FETCH_VAC';
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


export const FETCH_FRIEDNLIST = 'FETCH_FRIEDNLIST';
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

export const FETCH_PLAYEDGAMES = 'FETCH_PLAYEDGAMES';
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
