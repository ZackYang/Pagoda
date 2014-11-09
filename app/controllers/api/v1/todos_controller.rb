class Api::V1::TodosController < Api::V1::BaseController
  
  respond_to :json
  
  def create
    @todo = Todo.create(todo_params)
    respond_with(:api, :v1, @todo, template: 'api/v1/todos/show')
  end
  
  def update
    @todo = Todo.find(params[:id])
    @todo.update_attributes! todo_params
    @todo.fire_events!(params[:fire]) if params[:fire]
    respond_with(:api, :v1, @todo, template: 'api/v1/todos/show')
  end
  
  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    respond_with(:api, :v1, @todo, template: 'api/v1/todos/show')
  end
  
  private
  
  def todo_params
    params.require(:todo).permit(:estimate, :name, :project_id, :user_id)
  end
  
end
