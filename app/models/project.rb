class Project < ActiveRecord::Base
  include EventTrigger
  
  belongs_to :team
  
  has_many :project_memberships
  has_many :users, through: :project_memberships
  has_many :todos
  
  validates :name, presence: true
  
end
