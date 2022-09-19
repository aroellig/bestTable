class Restaurant < ApplicationRecord
    validate :name, :location, :tables

    has_many :reservations,
    foreign_key: :reservation_id,
    class_name: 'Reservation'

    has_many :reservations,
    foreign_key: :opening_id,
    class_name: 'Opening'
end
