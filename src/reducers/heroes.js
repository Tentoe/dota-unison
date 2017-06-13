import { FETCH_HEROES, SUCCESS_SUFIX } from '../actions';

const innitialState = null;


const heroes = (state = innitialState, action) => {
  switch (action.type) {
    case FETCH_HEROES + SUCCESS_SUFIX:
      return action.payload.data.result.heroes
        .reduce((acc, item) => ({ ...acc, [item.id]: item.localized_name }), {});
    default:
      return state;
  }
};


export default heroes;
