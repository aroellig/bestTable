@restuarants.each do |restuarant|
  json.set! restuarant.id do
    json.partial! 'restuarant', restuarant: restuarant
    end
end
