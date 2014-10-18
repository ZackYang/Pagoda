class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer  :project_id, :user_id, :time_cost
      t.string   :state, :name
      t.text     :detail
      t.datetime :estimate, :completed_at, :started_at
      t.timestamps
    end
  end
end
