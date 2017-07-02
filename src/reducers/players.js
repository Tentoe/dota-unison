import { UPDATE_PLAYERS } from '../actions/serverLog';

const innitialState = [];


const players = (state = innitialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};


export default players;
