import { RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT} from '../actions/restaurant_action'



const restaurantsReducer = (state = {}, action) => {
   Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState
        case REMOVE_RESTAURANT:
            delete newState[action.restaurantId];
            return newState
        default:
            return state
    }
}

export default restaurantsReducer;