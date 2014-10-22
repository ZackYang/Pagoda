class Api::V1::TeamsController < Api::V1::BaseController
  
  respond_to :json
  
  def index
    @teams = current_user.teams
    respond_with @teams
  end
  
  
  def show
    @team = current_user.teams.find_by_id(params[:id])
    respond_with @team
  end
  
end
