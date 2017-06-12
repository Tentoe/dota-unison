import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_FRIEDNLIST, SUCCESS_SUFIX } from '../actions';

const innitialState = [];

const friendLists = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_FRIEDNLIST + SUCCESS_SUFIX:
      {
        const fl = {
          steamID64: action.meta.previousAction.player.steamID64,
          friends: action.payload.data.friendslist.friends,
        };
        return [...state, fl];
      }
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default friendLists;
