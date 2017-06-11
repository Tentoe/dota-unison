import { combineReducers } from 'redux';
import summaries from './summaries';
import players from './players';

const rootReducer = combineReducers({
  summaries,
  players,
});

export default rootReducer;
