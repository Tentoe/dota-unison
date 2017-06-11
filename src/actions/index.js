import key from '../keys';

export const UPDATE_SUMMARIES = 'UPDATE_SUMMARIES';
export const UPDATE_VAC = 'UPDATE_VAC';
export const FETCH_SUMMARIES = 'FETCH_SUMMARIES';
export const SUCCESS_SUFIX = '_SUCCESS';

export const UPDATE_PLAYERS = 'UPDATE_PLAYERS';


export const updateSummaries = idString => ({
  type: FETCH_SUMMARIES,
  payload: {
    client: 'steam',
    request: {
      url: `/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${idString}`,
    },
  },
}
);


// function getHeroList() {
//   const encodedURI = window.encodeURI(`https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=${key}&language=english`);
//   return axios.get(encodedURI).then(response => response.data.result.heroes);
// }
