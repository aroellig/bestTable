import { RECEIVE_RESERVATION_ERRORS, RECEIVE_RESERVATION } from '../actions/reservation_actions'
import { CLEAR_ERRORS } from '../actions/session_actions'
import { RECEIVE_RESTAURANTS } from '../actions/event_action'

const reservationErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      if (action.errors){
      return action.errors;
      }else{
        return []
      }
    case RECEIVE_RESERVATION:
      return [];
    case RECEIVE_RESTAURANTS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default reservationErrorsReducer;