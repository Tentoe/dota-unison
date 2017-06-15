import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_PLAYEDGAMES, SUCCESS_SUFIX } from '../actions';

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
