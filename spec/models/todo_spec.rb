require 'spec_helper'

describe Todo do
  
  context 'there is no user be assigned to the todo' do
    
    let(:todo) { FactoryGirl.create :todo }
    
    before { todo.stub(:owner).and_return(nil) }
    
    specify { expect { todo.start! }.to raise_error(StateMachine::InvalidTransition) }
    
  end
  
  context 'spending 3 seconds on one todo' do
    
    let(:todo) { FactoryGirl.create :todo }
    
    before do
      todo.stub(:owner).and_return(true)
      time1 = ::Time.zone.now
      time2 = 1.minute.from_now(time1)
      ::Time.zone.stub(:now).and_return(time1, time2)
    end
    
    specify { expect { todo.start! }.to change{ todo.state }.from('pause').to('handling') }
    
    specify do
      todo.start!
      todo.stop!
      todo.time_cost.should == 60
    end
    
    context 'todo be completed' do
      
      before { todo.complete! }
      
      specify { todo.completed_at.should_not be_nil }
      specify { todo.state.should == 'completed' }
      
    end
    
  end
  
end
