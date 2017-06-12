import { FETCH_VAC, SUCCESS_SUFIX } from '../actions';
import { UPDATE_PLAYERS } from '../actions/readServerLog';

const innitialState = [];


const summaries = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_VAC + SUCCESS_SUFIX:
      return action.payload.data.players;
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};


export default summaries;
