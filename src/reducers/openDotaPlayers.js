import { SUCCESS_SUFIX } from '../actions';
import { UPDATE_PLAYERS } from '../actions/serverLog';
import { FETCH_OPENDOTAPLAYER } from '../actions/openDotaAPI';

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
