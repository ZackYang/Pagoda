json.id (@project.id)
json.(@project, :name, :description, :created_at, :updated_at, :team_id)

json.todos @project.todos do |todo|
  json.merge! todo.attributes
  json.estimate todo.estimate.to_date.to_s(:db) if todo.estimate
end

json.users @project.users do |user|
  json.merge! user.attributes
  json.avatar user.avatar
end