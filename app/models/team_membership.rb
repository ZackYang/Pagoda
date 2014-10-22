class TeamMembership < ActiveRecord::Base
  
  include Role
  
  belongs_to :team
  belongs_to :user
  
  validates :user_id, :team_id, presence: true
  
  after_create :set_the_first_user_as_super_admin, on: :create

  def set_the_first_user_as_super_admin
    self.update_attributes(role: TeamMembership::SUPER_ADMIN) if TeamMembership.where(team_id: self.team_id).count == 1
  end
  
end
