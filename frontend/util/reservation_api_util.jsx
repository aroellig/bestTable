export const fetchReservations = () => (
    $.ajax({
        url:'/api/reservations'
    })
)

export const fetchReservation = reservationId => (
    $.ajax({
        url:`/api/reservations/${reservationId}`
    })
)

export const createReservation = reservation => (
    $.ajax({
        url:'/api/reservations',
        method: 'POST',
        data: { reservation }
    })
)

export const deleteReservation = reservationId => (
    $.ajax({
        url:`/api/reservations/${reservationId}`,
        method: 'DELETE'
    })
)