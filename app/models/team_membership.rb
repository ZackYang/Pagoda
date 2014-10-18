class TeamMembership < ActiveRecord::Base
  
  include Role
  
  belongs_to :team
  belongs_to :user
  
  validates :user_id, :team_id, presence: true
  
end
