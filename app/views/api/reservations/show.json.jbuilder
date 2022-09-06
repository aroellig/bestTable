json.reservation do
  json.partial! '/api/reservations/reservation', reservation: @reservation
end

json.user do 
    json.partial! 'api/users/user', user: @reservation.user
end

json.restaurant do
    json.partial! 'api/restaurants/restaurant', event: @reservation.restaurant
end