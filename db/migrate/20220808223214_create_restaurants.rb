class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null:false
      t.string :location, null:false
      t.integer :tables, null:false
      t.timestamps
    end
  end
end
