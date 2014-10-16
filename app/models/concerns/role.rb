module Role
  extend ActiveSupport::Concern
  
  USER =  'user'
  ADMIN = 'admin'
  SUPER_ADMIN = 'super_admin'
  
  
  ROLE_TYPES = [
    USER,
    ADMIN,
    SUPER_ADMIN
  ]
  
  def method_missing meth, *args, &block
    if meth.to_s =~ /^role_(.+)\?$/
      role = $1
      return false if role.blank? or !ROLE_TYPES.include?(self.role)
      self.role == role
    else
      super
    end
  end
  
end