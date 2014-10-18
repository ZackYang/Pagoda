module EventTriggerHelper
  extend ActiveSupport::Concern
  
  included do
    before_filter :trigger_event
  end
  
  def event_be_fired_by user
    @new_event = Event.be_fired_by(user)
  end
  
  def trigger_event
    @new_event.save
  end
  
end