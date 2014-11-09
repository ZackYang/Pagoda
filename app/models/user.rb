class User < ActiveRecord::Base
  
  include Gravtastic
  gravtastic
  
  has_many :team_memberships
  has_many :providers
  
  has_many :teams, through: :team_memberships
  belongs_to :team

  has_many :todos
  
  has_many :events
  
  after_create :set_email
  
  def set_email
    if provider = self.providers.where(name: 'identity').first
      email = Identity.find_by_id(providers.uid).try(:email)
      self.update_attributes email: email
    end
  end
  
  def avatar
    URI::encode self.gravatar_url(:secure => false)
  end
    
end
