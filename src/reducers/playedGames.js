import { UPDATE_PLAYERS } from '../actions/readServerLog';
import { FETCH_PLAYEDGAMES, SUCCESS_SUFIX } from '../actions';

const innitialState = [];

const playedGames = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_PLAYEDGAMES + SUCCESS_SUFIX:
      {
        const { games } = action.payload.data.response;
        if (!games) return state;
        const pg = {
          steamID64: action.meta.previousAction.player.steamID64,
          games,
        };
        return [...state, pg];
      }
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};

export default playedGames;
