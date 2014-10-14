class Identity < OmniAuth::Identity::Models::ActiveRecord
  
  validates :email, uniqueness: true
  
end
