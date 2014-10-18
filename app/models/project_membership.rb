class ProjectMembership < ActiveRecord::Base
  
  include Role
  
  belongs_to :project
  
  belongs_to :user
  
  validates :user_id, :project_id, presence: true
  validate :project_member_must_be_a_member_of_team
  
  def project_member_must_be_a_member_of_team
    
    unless self.project.team.users.find_by_id(user_id)
      errors[:user_id] <<  'User does not belongs to this team'
    end
    
  end
  
end
