class Team < ActiveRecord::Base
  
  has_many :team_memberships
  has_many :users, through: :team_memberships
  
  validates :name, presence: true
  
  after_commit :set_the_first_user_as_super_admin, on: :create
  
  def set_the_first_user_as_super_admin
    self.team_memberships.first.update_attributes(role: TeamMembership::SUPER_ADMIN)
  end
  
end
