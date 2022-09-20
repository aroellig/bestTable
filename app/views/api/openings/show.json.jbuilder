json.opening do
  json.partial! '/api/openings/opening', opening: @opening
end



json.restaurant do
    json.partial! 'api/restaurants/restaurant', event: @opening.restaurant
end