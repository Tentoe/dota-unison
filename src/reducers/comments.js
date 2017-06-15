import { UPDATE_COMMENT, SUCCESS_SUFIX } from '../actions';
import { UPDATE_PLAYERS } from '../actions/readServerLog';

const innitialState = [];


const comments = (state = innitialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT + SUCCESS_SUFIX:
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


export default comments;
