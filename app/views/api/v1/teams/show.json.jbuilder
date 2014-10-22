json.id (@team.id)
json.name (@team.name)
json.(@team, :created_at, :updated_at)

json.users @team.users

json.projects @team.projects