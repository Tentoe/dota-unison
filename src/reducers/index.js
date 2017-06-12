import { combineReducers } from 'redux';
import summaries from './summaries';
import players from './players';
import vac from './vac';
import friendLists from './friendLists';
import playedGames from './playedGames';
import openDotaPlayers from './openDotaPlayers';

const rootReducer = combineReducers({
  summaries,
  players,
  vac,
  friendLists,
  playedGames,
  openDotaPlayers,
});

export default rootReducer;
