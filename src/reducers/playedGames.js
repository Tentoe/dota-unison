import { SUCCESS_SUFIX } from '../actions';
import { UPDATE_PLAYERS } from '../actions/serverLog';
import { FETCH_PLAYEDGAMES } from '../actions/steamAPI';

const innitialState = {};

const playedGames = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_PLAYEDGAMES + SUCCESS_SUFIX:
      return {
        ...state,
        [action.meta.previousAction.player.steamID64]: action.payload.data.response,
      };
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default playedGames;
