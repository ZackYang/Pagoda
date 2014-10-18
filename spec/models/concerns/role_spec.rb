require 'spec_helper'

class ModelWithRoleMock;include Role;end

describe Role do
  
  context :model_is_an_admin do
    
    let(:user) { ModelWithRoleMock.new }
    
    context 'role method return admin' do
    
      before { user.stub(:role).and_return('admin') }
    
      specify { user.role_admin? }
    
    end
    
    context 'role method return nil' do
    
      before { user.stub(:role).and_return(nil) }
    
      specify do
        expect(user.role_admin?).to eq(false)
      end
    
    end
    
    context 'role method return user' do
    
      before { user.stub(:role).and_return('user') }
    
      specify do
        expect(user.role_admin?).to eq(false)
      end
    
    end
    
  end
  
end
