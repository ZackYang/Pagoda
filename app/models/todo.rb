class Todo < ActiveRecord::Base
  
  belongs_to :project
  belongs_to :owner, class_name: 'User'
  
  validates :name, :project_id, presence: true
  
  include EventTrigger
  
  state_machine :state, initial: :pause do
    
    event :start do
      transition [:pause] => :handling, if: :owner
    end
    
    around_transition on: :start do |todo, transition, block|
      todo.started_at = ::Time.zone.now
      block.call
      todo.time_cost = ::Time.zone.now - todo.started_at
    end
        
    event :stop do
      transition [:handling] => :pause
    end
    
    event :complete do
      transition all => :completed, do: :record_completed_at
    end
    
    after_transition any => :completed do |todo, transition|
      todo.completed_at = ::Time.zone.now
    end
    
  end
  
end
