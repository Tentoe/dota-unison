import { SUCCESS_SUFIX } from '../actions';
import { FETCH_HEROES } from '../actions/steamAPI';

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
// TODO make sure that is done before anything else

export default heroes;
