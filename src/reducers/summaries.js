import { FETCH_SUMMARIES, SUCCESS_SUFIX } from '../actions';
import { UPDATE_PLAYERS } from '../actions/readServerLog';

const innitialState = {};


const summaries = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARIES + SUCCESS_SUFIX:
      return action.payload.data.response.players
          .reduce((acc, summary) =>
          ({ ...acc, [summary.steamid]: summary }), {});
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};


export default summaries;
