

export const FETCH_OPENDOTAPLAYER = 'FETCH_OPENDOTAPLAYER';
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


export const FETCH_OPENDOTACOUNTS = 'FETCH_OPENDOTACOUNTS';
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


export const FETCH_OPENDOTAHEROES = 'FETCH_OPENDOTAHEROES';
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
