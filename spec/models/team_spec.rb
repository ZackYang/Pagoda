require 'spec_helper'

describe Team do
  
  context 'create a team by user' do
    
    let(:user) { FactoryGirl.create :user }
    
    specify do
      expect(user.teams.build(name: 'test').save).to eq(true)
    end
    
    context 'successfully' do
    
      let!(:team) { user.teams.create!(name: 'test') }
      
      specify { team.team_memberships.where(user_id: user.id).first.should_not be_nil }
      
      specify { team.team_memberships.where(user_id: user.id).first.role.should == 'super_admin' }
    end
    
  end
  
end
