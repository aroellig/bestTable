import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';
import restaurantErrorsReducer from './restaurant_errors_reducer'

const errorsReducer = combineReducers({

  session: session_errors_reducer,
  reservation: reservationErrorsReducer,
  restaurant: restaurantErrorsReducer 
})

export default errorsReducer