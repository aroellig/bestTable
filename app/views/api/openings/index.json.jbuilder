@openings.each do |opening|
  json.set! opening.id do 
    json.extract! opening, :id, :restaurant_id, :number, :date
  end
end