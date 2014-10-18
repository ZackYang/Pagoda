module EventTrigger
  extend ActiveSupport::Concern
  
  included do
    has_many :events, as: :committable
  end
  
end