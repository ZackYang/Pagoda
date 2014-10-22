class Api::V1::ProjectsController < Api::V1::BaseController

  before_filter :load_team
  
  respond_to :json
  
  def create
    @team.projects.create(project_params)
    respond_with(@team)
  end
  
  private
  
  def load_team
    @team = current_user.teams.find_by_id(params[:team_id])
  end
  
  def project_params
    params.require(:project).permit(:name, :users)
  end
  
end
