class TeamsController < ApplicationController
  
  def show
    render layout: 'team'
  end
  
  def create
    @team = current_user.teams.create(team_params)
    redirect_to :back
  end
  
  private
  
  def team_params
    params.require(:team).permit(:name)
  end
  
end