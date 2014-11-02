class Api::V1::TodosController < Api::V1::BaseController
  
  respond_to :json
  
  def create
    @todo = Todo.create(todo_params)
    respond_with(:api, :v1, @todo)
  end
  
  def show
  end
  
  private
  
  def todo_params
    params.require(:todo).permit(:estimate, :name, :project_id, :user_id)
  end
  
end
