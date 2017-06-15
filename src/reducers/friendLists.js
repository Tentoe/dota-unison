import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_FRIEDNLIST, SUCCESS_SUFIX } from '../actions';

const innitialState = {};

const friendLists = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_FRIEDNLIST + SUCCESS_SUFIX:
      return {
        ...state,
        [action.meta.previousAction.player.steamID64]: action.payload.data.friendslist.friends,
      };
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default friendLists;
