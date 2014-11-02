json.id (@project.id)
json.(@project, :name, :description, :created_at, :updated_at, :team_id)

json.todos @project.todos

json.users @project.users