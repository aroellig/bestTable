import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";

const receiveReservations = reservations => {
    return {
        type: RECEIVE_RESERVATIONS,
        reservations
    }
}

const receiveReservation = reservation => {
    return {
        type: RECEIVE_RESERVATION,
        reservation
    }
}

const removeReservation = reservationId => {
    return {
        type: REMOVE_RESERVATION, 
        reservationId
    }
}

 const receiveReservationErrors = (errors) => {
    return{ type: RECEIVE_RESERVATION_ERRORS,
    errors,
  }};

export const fetchReservations = () => dispatch => (
    APIUtil.fetchReservations()
    .then(reservations => dispatch(receiveReservations(reservations)))
)

export const fetchReservation = reservationId => dispatch => (
    APIUtil.fetchReservation(reservationId)
    .then(reservation => dispatch(receiveReservation(reservation)))
)

export const createReservation = (reservation) => (dispatch) =>
  APIUtil.createReservation(reservation).then(
    (restaurant) => dispatch(receiveReservation(reservation)),
    (errors) => dispatch(receiveReservationErrors(errors.responseJSON))
  );

export const deleteReservation = reservationId => dispatch => (
    APIUtil.deleteReservation(reservationId)
    .then(() => dispatch(removeReservation(reservationId)))
)