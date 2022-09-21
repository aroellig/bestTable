export const fetchOpenings = () => (
    $.ajax({
        url: '/api/openings'
    })
)

export const fetchOpening = openingId => {
   return $.ajax({
        url:`/api/openings/${openingId}`
    })

}

export const createOpening = opening => {
   return $.ajax({
        url: '/api/openings',
        method: 'POST',
        data: opening,
        processData: false, contentType: false,
    })
}
export const updateOpening = opening => {
   return $.ajax({
        url: `/api/openings/${opening.id}`,
        method: 'PATCH',
        data:   opening,
        processData: false, contentType: false
    })
}

export const removeRestaurant = openingId => (
    $.ajax({
        url: `/api/openings/${openingId}`,
        method: 'DELETE'
    })
)