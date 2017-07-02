import { SUCCESS_SUFIX } from '../actions';
import { FETCH_VAC } from '../actions/steamAPI';
import { UPDATE_PLAYERS } from '../actions/serverLog';

const innitialState = {};


const summaries = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_VAC + SUCCESS_SUFIX:
      return action.payload.data.players
      .reduce((acc, vac) =>
        ({ ...acc, [vac.SteamId]: vac }), {});
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};


export default summaries;
