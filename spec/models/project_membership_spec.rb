require 'spec_helper'

describe ProjectMembership do
  
  context 'add a new member into the project' do
    
    let(:team) { FactoryGirl.create :team }
    let(:user) { FactoryGirl.create :user }
    let(:project) { FactoryGirl.create :project, team: team }
    let(:membership) { FactoryGirl.build :project_membership, project_id: project.id, user: user}
    
    context 'the member is not in the team' do
      
      specify do
        membership.should_receive(:project_member_must_be_a_member_of_team)
        membership.save
      end
      
      specify { expect(membership.save).to eq(false) }
      
    end
    
    context 'the member is in the team' do
      
      before { team.users << user }
      
      specify { expect(membership.save).to eq(true) }
      
    end
    
  end
  
end
