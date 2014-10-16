class CreateTeamMemberships < ActiveRecord::Migration
  def change
    create_table :team_memberships do |t|
      t.integer :user_id, :team_id
      t.string  :role
      t.timestamps
    end
  end
end
