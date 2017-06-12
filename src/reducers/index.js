import { combineReducers } from 'redux';
import summaries from './summaries';
import players from './players';
import vac from './vac';
import friendLists from './friendLists';
import playedGames from './playedGames';

const rootReducer = combineReducers({
  summaries,
  players,
  vac,
  friendLists,
  playedGames,
});

export default rootReducer;
