import { UPDATE_PLAYERS } from '../actions/serverLog';
import { UPDATE_COMMENTS } from '../actions';

const innitialState = {};

export const commentType = {
  NEUTRAL: 0,
  POSITVE: 1,
  NEGATIVE: 2,
};

const comments = (state = innitialState, { type, payload }) => {
  switch (type) {
    case UPDATE_COMMENTS :
      return { ...state, ...payload };
    case UPDATE_PLAYERS:
      return innitialState;
    default:
      return state;
  }
};
// TODO IMPLEMENT

export default comments;
