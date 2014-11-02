class Api::V1::ProjectsController < Api::V1::BaseController

  before_filter :load_team
  
  respond_to :json
  
  def create
    @project = @team.projects.create(project_params)
    @project.users << current_user
    respond_with(:api, :v1, @team, @project)
  end
  
  def show
    @project = @team.projects.find(params[:id])
    respond_with(@project)
  end
  
  private
  
  def load_team
    @team = current_user.teams.find_by_id(params[:team_id])
  end
  
  def project_params
    params.require(:project).permit(:name, :users)
  end
  
end
