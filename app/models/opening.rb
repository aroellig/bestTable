class Opening < ApplicationRecord
    validate :number, :date

    belongs_to :restaurant,
    foreign_key: :restaurant_id,
    class_name: 'Restaurant'
end
