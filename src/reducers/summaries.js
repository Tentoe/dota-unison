import { FETCH_SUMMARIES, SUCCESS_SUFIX } from '../actions';

const innitialState = [];


const summaries = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_SUMMARIES + SUCCESS_SUFIX:
      return action.payload.data.response.players;
    default:
      return state;
  }
};


export default summaries;
