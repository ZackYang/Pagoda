class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string  :committable_type, :behavior, :detail
      t.integer :committable_id, :user_id
      t.timestamps
    end
  end
end
