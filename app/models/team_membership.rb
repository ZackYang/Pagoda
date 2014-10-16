class TeamMembership < ActiveRecord::Base
  
  include Role
  
  belongs_to :team
  belongs_to :team_membership
  
  validates :user_id, :team_id, presence: true
  
end
