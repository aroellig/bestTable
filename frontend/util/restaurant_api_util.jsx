export const fetchRestaurants = () => (
    $.ajax({
        url: '/api/restaurants'
    })
)

export const fetchRestaurant = restaurantId => {
   return $.ajax({
        url:`/api/restaurants/${restaurantId}`
    })

}

export const createRestaurant = restaurant => {
   return $.ajax({
        url: '/api/restaurants',
        method: 'POST',
        data: restaurant,
        processData: false, contentType: false,
    })
}
export const updateRestaurant = restaurant => {
   return $.ajax({
        url: `/api/restaurants/${restaurant.id}`,
        method: 'PATCH',
        data:   restaurant,
        processData: false, contentType: false
    })
}

export const removeRestaurant = restaurantId => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}`,
        method: 'DELETE'
    })
)
