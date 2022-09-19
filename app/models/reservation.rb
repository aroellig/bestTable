class Reservation < ApplicationRecord
    validate :name, :number, :date

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: 'Restaurant'
end
