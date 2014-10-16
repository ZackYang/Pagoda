class Provider < ActiveRecord::Base
  
  belongs_to :user
  
  validates :uid, uniqueness: { scope: :name }
  validates :name, :uid, presence: true
  
  before_create :create_user
  
  def self.find_or_create_by_hash hash
    options = { name: hash.provider, uid: hash.uid }
    unless provider = self.where(options).first
      provider = self.create(options)
    end
    provider
  end
  
  def create_user
    self.user = User.create
  end
  
end