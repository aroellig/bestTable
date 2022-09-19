class Openings < ActiveRecord::Migration[5.2]
  def change
    create_table :openings do |t|
    t.integer :restaurant_id, null: false
    t.datetime :date, null: false
    t.integer :number, null: false
    t.timestamps
    end
  end
end
