import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_OPENDOTACOUNTS, SUCCESS_SUFIX } from '../actions';

const innitialState = [];

const openDotaCounts = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_OPENDOTACOUNTS + SUCCESS_SUFIX:
      return [
        ...state,
        { ...action.payload.data, steamID64: action.meta.previousAction.player.steamID64 },
      ];
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default openDotaCounts;
