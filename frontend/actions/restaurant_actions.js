import * as APIUtil from '../util/event_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";


const receiveRestaurants = restaurants => {
    return{
        type: RECEIVE_RESTAURANTS,
        restaurants
    }
}

const receiveRestaurant = (restaurant) => {
    return{
        type: RECEIVE_RESTAURANT,
        restaurant
    }
}

const removeRestaurant = restaurantId => {
    return {
        type: REMOVE_RESTAURANT,
        restaurantId
    }
}



export const receiveRestaurantErrors = (errors) => {
    return{ type: RECEIVE_RESTAURANT_ERRORS,
    errors,
  }};
  

  

export const fetchRestaurants = () => dispatch => (
    APIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
)

export const fetchRestaurant = restaurantId => dispatch => {
    return APIUtil.fetchRestaurant(restaurantId)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
}

export const createRestaurant = (restaurant) => (dispatch) =>
  APIUtil.createRestaurant(restaurant).then(
    (restaurant) => dispatch(receiveRestaurant(restaurant)),
    (errors) => dispatch(receiveRestaurantErrors(errors.responseJSON))
  );

  export const updateRestaurant = (restaurant) => (dispatch) =>
  APIUtil.updateRestaurant(restaurant).then(
    (restaurant) => dispatch(receiveRestaurant(restaurant)),
    (errors) => dispatch(receiveRestaurantErrors(errors.responseJSON))
  );

export const deleteRestaurant = restaurantId => dispatch => (
    APIUtil.removeRestaurant(restaurantId)
    .then(() => dispatch(removeRestaurant(restaurantId)))
)