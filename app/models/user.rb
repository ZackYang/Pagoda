class User < ActiveRecord::Base
  
  has_many :team_memberships
  has_many :teams, through: :team_memberships
  belongs_to :team

  has_many :todos
  
  has_many :events
    
end
