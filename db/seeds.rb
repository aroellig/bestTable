# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'faker'

User.delete_all

u0 = User.create!({username: "andrew", password: "andy12", email: 'andy@andy.com'})


10.times do |index| 
    Restaurant.create!(
                  name: Faker::Restaurant.name,
                  location: "Cupertino",
                  tables: rand(10...20)
                  )            
  end

  start = Date.today
  (start..start + 180).each do |date|
    Restaurant.all.each do |restaurant|
        Opening.create!(
           restaurant_id: restaurant.id,
           number: restaurant.tables,
           date: date
        )
    end
  end