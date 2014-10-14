require 'spec_helper'

describe Provider do
  
  let(:hash) { double('hash', uid: '1234zxc', provider: 'identity') }
  
  context :find_or_create_provider_by_hash do
    
    let(:hash) { double('hash', uid: '1234zxc', provider: 'identity') }
    
    context :find_by_hash do
      
      before { FactoryGirl.create :provider, uid: '1234zxc', name: 'identity' }
      
      specify {
        described_class.find_or_create_by_hash(hash).should be_a_kind_of(Provider)
      }
      
      it {
        expect{ described_class.find_or_create_by_hash(hash) }.to change{ Provider.count }.by(0)
      }
    end
    
    context :create_by_hash do
      
      it {
        expect{ described_class.find_or_create_by_hash(hash) }.to change{ Provider.count }.by(1)
      }
      
    end
    
  end
  
  context :before_create_should_create_a_user do
    
    it {
      User.should_receive(:create).once
      described_class.find_or_create_by_hash(hash)
    }
    
    specify {
      described_class.find_or_create_by_hash(hash).user_id.should_not be_nil
    }
    
  end
  
end
