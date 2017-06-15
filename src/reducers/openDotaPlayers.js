import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_OPENDOTAPLAYER, SUCCESS_SUFIX } from '../actions';

const innitialState = {};

const openDotaPlayers = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_OPENDOTAPLAYER + SUCCESS_SUFIX:
      return {
        ...state,
        [action.meta.previousAction.player.steamID64]: action.payload.data,
      };
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default openDotaPlayers;
