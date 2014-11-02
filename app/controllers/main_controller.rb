class MainController < ApplicationController

  before_filter :need_login
  
  def index
    @team = Team.new
  end
  
end
