json.merge! @todo.attributes
json.estimate @todo.estimate.to_date.to_s(:db) if @todo.estimate