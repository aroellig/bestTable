class Restaurant < ApplicationRecord
    validate :name, :location, :tables
end
