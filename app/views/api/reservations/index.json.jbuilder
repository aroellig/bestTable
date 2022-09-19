@reservations.each do |reservation|
  json.set! reservation.id do 
    json.extract! reservation, :id, :restaurant_id, :user_id, :name, :number, :date
  end
end