class CreateProjectMemberships < ActiveRecord::Migration
  def change
    create_table :project_memberships do |t|
      t.integer :user_id, :project_id
      t.string  :role
      t.timestamps
    end
  end
end
