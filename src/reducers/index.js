import { combineReducers } from 'redux';
import summaries from './summaries';
import players from './players';
import vac from './vac';
import friendLists from './friendLists';
import playedGames from './playedGames';
import openDotaPlayers from './openDotaPlayers';
import openDotaCounts from './openDotaCounts';
import openDotaHeroes from './openDotaHeroes';
import heroes from './heroes';
import comments from './comments';

const rootReducer = combineReducers({
  summaries,
  players,
  vac,
  friendLists,
  playedGames,
  openDotaPlayers,
  openDotaCounts,
  openDotaHeroes,
  heroes,
  comments,
});

export default rootReducer;
