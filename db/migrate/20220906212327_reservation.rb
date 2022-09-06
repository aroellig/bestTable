class Reservation < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :name, null:false
      t.integer :number, null:false
      t.integer :user_id, null: false
      t.integer :restaurant_id, null: false
      
      t.timestamps
    end
  end
end
