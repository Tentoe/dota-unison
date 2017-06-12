import { combineReducers } from 'redux';
import summaries from './summaries';
import players from './players';
import vac from './vac';
import friendLists from './friendLists';

const rootReducer = combineReducers({
  summaries,
  players,
  vac,
  friendLists,
});

export default rootReducer;
