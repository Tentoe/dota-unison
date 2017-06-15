import { UPDATE_PLAYERS, UPDATE_COMMENTS } from '../actions/readServerLog';
import { UPCLICK_COMMENT, DOWNCLICK_COMMENT } from '../actions';

const innitialState = {};

export const commentType = {
  NEUTRAL: 0,
  POSITVE: 1,
  NEGATIVE: 2,
};


const comments = (state = innitialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COMMENTS :
      return payload.reduce((acc, player) =>
        Object.assign(acc, { [player.steamID64]: { type: commentType.NEUTRAL } }), {});
    case UPCLICK_COMMENT: {
      return {
        ...state,
        [payload]: {
          ...state[payload],
          type: state[payload].type === commentType.POSITVE ?
            commentType.NEUTRAL :
            commentType.POSITVE,
        },
      };
    }
    case DOWNCLICK_COMMENT: {
      return {
        ...state,
        [payload]: {
          ...state[payload],
          type: state[payload].type === commentType.NEGATIVE ?
            commentType.NEUTRAL :
            commentType.NEGATIVE,
        },
      };
    }
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};
// TODO IMPLEMENT

export default comments;
