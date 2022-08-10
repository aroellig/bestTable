import { RECEIVE_RESTAURANT_ERRORS } from '../actions/restaurant_action'
import { CLEAR_ERRORS } from '../actions/session_actions'

const restaurantErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default restaurantErrorsReducer;