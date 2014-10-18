class Event < ActiveRecord::Base
  
  belongs_to :committable, polymorphic: true
  belongs_to :user
  
  # usage: Event.be_fired_by(@user).because_a(n)(@committable).has_be(:applied).with(@detail)
  # 
  
  def Event.be_fired_by user
    self.new(user: user)
  end
  
  def because_a committable
    self.committable = committable
    self
  end
  
  alias_method :because_an, :because_a
  
  def has_be behavior
    self.behavior = behavior
    self
  end
  
  def with detail
    self.detail = detail
    self
  end
  
end
