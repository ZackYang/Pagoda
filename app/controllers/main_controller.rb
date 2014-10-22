class MainController < ApplicationController
  
  def index
    @team = Team.new
  end
  
end
