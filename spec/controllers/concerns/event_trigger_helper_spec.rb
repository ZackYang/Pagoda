require 'spec_helper'

class FakeController < ApplicationController
  include EventTriggerHelper
end

describe FakeController do
  
  let(:user) { FactoryGirl.create :user }
  let(:project) { FactoryGirl.create :project }
  let(:controller) { described_class.new }
  
  before { controller.event_be_fired_by(user).because_a(project).has_be(:replied).with(Faker::Company.name) }
  
  it "should create a event" do
    expect{ controller.trigger_event }.to change{ Event.count }.by(1)
  end
  
end
