import { UPDATE_PLAYERS } from '../actions/readServerLog';

const innitialState = [];


const players = (state = innitialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYERS:
      return action.payload; // TODO delete other player data in middleware
    default:
      return state;
  }
};


export default players;